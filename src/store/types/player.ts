import { Position } from './position';

export interface Player {
  id: string;
  overallRank: number;
  tier: number;
  name: string;
  team: string;
  position: Position;
  positionalRank: number;
  strengthOfSchedule: number;
  pointsAboveProjection: number;
  gamesAboveProjection: string;
  price: number;
  value: number;
  byeWeek: number;
  drafted: boolean;
}

export interface QB extends Player {
  position: Position.QB;
}

export interface RB extends Player {
  position: Position.RB;
}

export interface WR extends Player {
  position: Position.WR;
}

export interface TE extends Player {
  position: Position.TE;
}

export interface K extends Player {
  position: Position.K;
}

export interface DST extends Player {
  position: Position.DST;
}

export interface OP extends Player {
  position: Position.QB | Position.RB | Position.WR | Position.TE;
}

export interface Flex extends Player {
  position: Position.RB | Position.WR | Position.TE;
}
