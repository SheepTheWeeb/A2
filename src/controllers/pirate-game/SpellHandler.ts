import GameCharacter from '../../models/pirate-game/GameCharacter';
import Player from '../../models/pirate-game/Player';
import BlessingOfTheSheep from '../../models/pirate-game/Spells/BlessingOfTheSheep';
import Blizzard from '../../models/pirate-game/Spells/Blizzard';
import ChaosBlast from '../../models/pirate-game/Spells/ChaosBlast';
import CheetosDeletos from '../../models/pirate-game/Spells/CheetosDeletos';
import FireStorm from '../../models/pirate-game/Spells/FireStorm';
import HealPulse from '../../models/pirate-game/Spells/HealPulse';
import SmolPPStrike from '../../models/pirate-game/spells/SmolPPStrike';
import Soeppie from '../../models/pirate-game/Spells/Soeppie';
import Spell from '../../models/pirate-game/spells/Spell';
import WindMissle from '../../models/pirate-game/Spells/WindMissle';
import YeetusMaximus from '../../models/pirate-game/Spells/YeetusMaximus';

export default class SpellHandler {
  static spells: Spell[] = [
    new SmolPPStrike(),
    new WindMissle(),
    new HealPulse(),
    new FireStorm(),
    new Blizzard(),
    new Soeppie(),
    new ChaosBlast(),
    new BlessingOfTheSheep(),
    new YeetusMaximus(),
    new CheetosDeletos()
  ];

  static handle(caster: Player, target: GameCharacter): void {
    const MAX_MAGIC = 11;
    const castRoll = Math.floor(Math.random() * (caster.magic % MAX_MAGIC)) + 1;
    const chosenSpell: Spell = SpellHandler.spells[castRoll];

    //TODO: gekke berekeningen hier uitvoeren en apply'en
  }
}
