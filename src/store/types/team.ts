import { DST, Flex, K, OP, Player, QB, RB, TE, WR } from './player';

export interface Team {
  id: string;
  name: string;
  owner: string;
  money: number;
  qb?: QB;
  rb1?: RB;
  rb2?: RB;
  wr1?: WR;
  wr2?: WR;
  flex?: Flex;
  op?: OP;
  te?: TE;
  k?: K;
  dst?: DST;
  bench?: Player[];
}

export enum RosterPosition {
  QB = 'qb',
  RB1 = 'rb1',
  RB2 = 'rb2',
  WR1 = 'wr1',
  WR2 = 'wr2',
  FLEX = 'flex',
  OP = 'op',
  TE = 'te',
  K = 'k',
  DST = 'dst',
  BENCH = 'bench',
}
