import Discord from 'discord.js';
import path from 'path';
import fs from 'fs';
import GameState from '../../../models/pirate-game/GameState';
import BotCommand from '../../BotCommand';
export default class StartPirateGameCommand implements BotCommand {
  name: string;
  alias: string[];
  description: string;
  usage: string;
  enabled: boolean;

  musicEnabled = false;
  skipCutscene = false;

  constructor() {
    this.name = 'letsgo';
    this.alias = [];
    this.description = 'Starts sheep pirate game.';
    this.usage = `${process.env.PREFIX}letsgo <skip> <no-music>`;
    this.enabled = true;
  }

  async execute(msg: Discord.Message, args: string[]): Promise<boolean> {
    if (!this.enabled) return false;

    if (!msg.channel.isText) {
      msg.reply('Channel must be a text channel');
      return;
    }

    this.skipCutscene = args.includes('skip');
    this.musicEnabled = args.includes('music');

    GameState.resetGame();
    const gameState: GameState = GameState.getInstance();
    gameState.channel = msg.channel as Discord.TextChannel;

    // Plays sea shanty 2 if music is enabled
    await this.playMusic(msg);
    this.playCutscene(msg);

    // TODO: implement character selection etc
    // create embed message
    const imgPath = path.join(
      __dirname,
      '../../../',
      gameState.enemyCatelogue[6].imgPath
    );
    const attachment = new Discord.MessageAttachment(imgPath, 'test.png');
    const embed: Discord.MessageEmbed = new Discord.MessageEmbed()
      .setColor('#0088ff')
      .setTitle('OK')
      .attachFiles([attachment])
      .setImage(`attachment://test.png`)
      .setTimestamp()
      .setFooter('Het is oke');

    msg.channel.send(embed);

    return true;
  }

  private async playMusic(msg: Discord.Message): Promise<void> {
    if (this.musicEnabled) {
      const { voice } = msg.member;
      if (!voice.channelID) {
        msg.reply('you must be in a voicechat to play the game.');
        return;
      }

      try {
        const connection = await voice.channel.join();
        connection.play(
          path.join(__dirname, '../../../assets/music', 'sea-shanty2.mp3')
        );
      } catch (ex) {
        console.log(ex.message);
      }
    }
  }

  private playCutscene(msg: Discord.Message) {
    if (!this.skipCutscene) {
      // TODO: implement intro cutscene
    }
  }
}
