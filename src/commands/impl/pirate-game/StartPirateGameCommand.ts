import Discord from 'discord.js';
import path from 'path';
import GameState from '../../../models/pirate-game/GameState';
import BotCommand from '../../BotCommand';

import enemyInformation from '../../../assets/json/pirate-game.enemies.json';
import characterInformation from '../../../assets/json/pirate-game.characters.json';
import itemInformation from '../../../assets/json/pirate-game.items.json';

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

    // TODO: init enemies, characters and items

    GameState.resetGame();
    const gameState: GameState = GameState.getInstance();
    gameState.channel = msg.channel as Discord.TextChannel;

    // Plays sea shanty 2 if music is enabled
    await this.playMusic(msg);
    this.playCutscene(msg);

    // TODO: implement character selection etc

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
