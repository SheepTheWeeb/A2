import BotCommand from './BotCommand';
import PingCommand from './impl/PingCommand';

export default class CommandLookup {
  commands: Array<BotCommand>;

  constructor() {
    const commands = [new PingCommand()];

    this.commands = commands;
  }

  public get(commandName: string): BotCommand | undefined {
    let foundCommand = this.commands.find((e) => e.name === commandName);
    if (foundCommand) return foundCommand;
    foundCommand = this.commands.find((e) => e.alias.indexOf(commandName) > -1);
    return foundCommand;
  }
}
