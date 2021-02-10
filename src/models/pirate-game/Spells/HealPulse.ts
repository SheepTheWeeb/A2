import Enemy from '../Enemy';
import Player from '../Player';
import Spell from './Spell';

export default class HealPulse implements Spell {
  name: string;
  castText: string;
  spellType: string;

  calculateDamage(caster: Player): number {
    throw new Error('Method not implemented.');
  }
  applyDamage(damage: number, target: Enemy): void {
    throw new Error('Method not implemented.');
  }
  calculateHealing(caster: Player): number {
    throw new Error('Method not implemented.');
  }
  applyHealing(heal: number): void {
    throw new Error('Method not implemented.');
  }
}
