import BotCommand from '../commands/BotCommand';
import PingCommand from '../commands/impl/PingCommand';
import OkCommand from '../commands/impl/OkCommand';
import HoroscopeCommand from '../commands/impl/HoroscopeCommand';
import StartPirateGameCommand from '../commands/impl/pirate-game/StartPirateGameCommand';
import LeaveVoiceChatCommand from '../commands/impl/pirate-game/LeaveVoiceChatCommand';

export default class CommandLookup {
  commands: Array<BotCommand>;

  constructor() {
    const commands = [
      new PingCommand(),
      new OkCommand(),
      new HoroscopeCommand(),
      new StartPirateGameCommand(),
      new LeaveVoiceChatCommand()
    ];

    this.commands = commands;
  }

  public get(commandName: string): BotCommand | undefined {
    let foundCommand = this.commands.find((e) => e.name === commandName);
    if (foundCommand) return foundCommand;
    foundCommand = this.commands.find((e) => e.alias.indexOf(commandName) > -1);
    return foundCommand;
  }
}
