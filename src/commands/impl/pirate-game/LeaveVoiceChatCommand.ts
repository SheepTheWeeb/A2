import Discord from 'discord.js';
import BotCommand from '../../BotCommand';

export default class LeaveVoiceChatCommand implements BotCommand {
  name: string;
  alias: string[];
  description: string;
  usage: string;
  enabled: boolean;

  constructor() {
    this.name = 'leave';
    this.alias = ['disconnect'];
    this.description = 'Leaves voicechat.';
    this.usage = `${process.env.PREFIX}leave`;
    this.enabled = true;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  execute(msg: Discord.Message, args: string[]): boolean {
    if (!this.enabled) return false;

    if (msg.guild.voice.channel) {
      msg.guild.voice.channel.leave();
    } else {
      msg.reply("Wollah, I'm not even in vc!");
    }

    return true;
  }
}
