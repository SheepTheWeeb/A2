import Discord from 'discord.js';
import path from 'path';
import BotCommand from '../../BotCommand';

export default class StartPirateGameCommand implements BotCommand {
  name: string;
  alias: string[];
  description: string;
  usage: string;
  enabled: boolean;

  musicEnabled = true;
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

    if (args[0] === 'skip') {
      this.skipCutscene = true;
    }

    if (args[1] === 'no-music') {
      this.musicEnabled = false;
    }

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
        msg.client.on('voiceStateUpdate', (oldState, newState) => {
          console.log(oldState.id);
          console.log(newState.id);
        });
      } catch (ex) {
        console.log(ex.message);
      }
    }

    return true;
  }
}
