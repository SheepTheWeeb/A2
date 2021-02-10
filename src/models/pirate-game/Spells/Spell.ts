import Enemy from '../Enemy';
import Player from '../Player';

export default interface Spell {
  name: string;
  castText: string;
  spellType: string;

  calculateDamage(caster: Player): number;

  applyDamage(damage: number, target: Enemy): void;

  calculateHealing(caster: Player): number;

  applyHealing(heal: number): void;
}
