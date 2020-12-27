import Discord from 'discord.js';
import BotCommand from '../BotCommand';

export default class OkCommand implements BotCommand {
  name: string;
  alias: string[];
  description: string;
  usage: string;
  enabled: boolean;

  constructor() {
    this.name = 'ok';
    this.alias = ['oksign', 'okhand'];
    this.description = 'Shows that you are ok.';
    this.usage = `${process.env.PREFIX}ok`;
    this.enabled = true;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  execute(msg: Discord.Message, args: string[]): boolean {
    if (!this.enabled) return;

    const okUrl =
      'https://media1.tenor.com/images/1417bce68e499228e79867d802e667c3/tenor.gif';

    // create embed message
    const embed: Discord.MessageEmbed = new Discord.MessageEmbed()
      .setColor('#0088ff')
      .setTitle('OK')
      .setImage(okUrl)
      .setTimestamp()
      .setFooter('Het is oke');

    msg.channel.send(embed);
  }
}
