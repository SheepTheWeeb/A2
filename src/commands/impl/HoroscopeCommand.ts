import Discord from 'discord.js';
import axios from 'axios';
import BotCommand from '../BotCommand';
import Horoscope from '../../models/Horoscope';
import {
  HoroscopeSign,
  horoscopePics
} from '../../utils/constants/HoroscopeConstants';
import { config } from '../../config/a2.config.json';
import { capitalize } from '../../utils/ParseUtils';

export default class HoroscopeCommand implements BotCommand {
  name: string;
  alias: string[];
  description: string;
  usage: string;
  enabled: boolean;

  constructor() {
    this.name = 'horoscope';
    this.alias = ['sign', 'zodiac', 'zodiacsign'];
    this.description = 'Shows your horoscope of the day.';
    this.usage = `${process.env.PREFIX}horoscope [zodiac sign]`;
    this.enabled = true;
  }

  async execute(msg: Discord.Message, args: string[]): Promise<boolean> {
    if (!this.enabled) return false;

    // validating the command input
    const sign = args[0]?.toLowerCase();
    if (!sign) {
      msg.reply(`you need to mention a zodiac sign like: '${this.usage}'.`);
      return false;
    } else if (!(sign in HoroscopeSign)) {
      msg.reply(`could not find a zodiac sign called '${sign}'.`);
      return false;
    }

    try {
      // call api to get the horoscope
      const horoscope = await this.getHoroscope(sign);
      if (!horoscope) {
        msg.channel.send('Horoscope API gave empty response.');
        return false;
      }

      // creating the fields of the embed message
      const fields: Array<Discord.EmbedFieldData> = [];
      const removedFields: Array<string> = ['description', 'current_date'];
      for (const i in horoscope) {
        if (removedFields.find((x) => x === i)) continue;

        const name = capitalize(i.replace('_', ' '));
        const field: Discord.EmbedFieldData = {
          name,
          value: horoscope[i],
          inline: true
        };
        fields.push(field);
      }

      // create embed message
      const embed: Discord.MessageEmbed = new Discord.MessageEmbed()
        .addFields(fields)
        .setColor('#0088ff')
        .setTitle(`Horoscope ${capitalize(sign)}`)
        .setDescription(horoscope.description)
        .setThumbnail(horoscopePics[sign])
        .setTimestamp()
        .setFooter('Pls believe', horoscopePics[sign]);

      msg.channel.send(embed);
      return true;
    } catch (error) {
      console.log(error);
      msg.channel.send(
        'Internal server error. Something went wrong while fetching horoscope.'
      );
      return false;
    }
  }

  async getHoroscope(sign: string): Promise<Horoscope> | null {
    const horoscopeConfig = {
      params: {
        sign,
        day: 'today'
      }
    };
    const horoscopeResponse = await axios.post(
      config.api.endpoints.horoscope,
      null,
      horoscopeConfig
    );
    return horoscopeResponse.data;
  }
}
