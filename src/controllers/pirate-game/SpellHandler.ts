import GameCharacter from '../../models/pirate-game/GameCharacter';
import Player from '../../models/pirate-game/Player';
import BlessingOfTheSheep from '../../models/pirate-game/spells/BlessingOfTheSheep';
import Blizzard from '../../models/pirate-game/spells/Blizzard';
import ChaosBlast from '../../models/pirate-game/spells/ChaosBlast';
import CheetosDeletos from '../../models/pirate-game/spells/CheetosDeletos';
import FireStorm from '../../models/pirate-game/spells/FireStorm';
import HealPulse from '../../models/pirate-game/spells/HealPulse';
import SmolPPStrike from '../../models/pirate-game/spells/SmolPPStrike';
import Soeppie from '../../models/pirate-game/spells/Soeppie';
import Spell from '../../models/pirate-game/spells/Spell';
import WindMissle from '../../models/pirate-game/spells/WindMissle';
import YeetusMaximus from '../../models/pirate-game/spells/YeetusMaximus';

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
