import BotCommand from './BotCommand';
import PingCommand from './impl/PingCommand';
import OkCommand from './impl/OkCommand';

export default class CommandLookup {
  commands: Array<BotCommand>;

  constructor() {
    const commands = [new PingCommand(), new OkCommand()];

    this.commands = commands;
  }

  public get(commandName: string): BotCommand | undefined {
    let foundCommand = this.commands.find((e) => e.name === commandName);
    if (foundCommand) return foundCommand;
    foundCommand = this.commands.find((e) => e.alias.indexOf(commandName) > -1);
    return foundCommand;
  }
}
