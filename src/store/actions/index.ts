import { AuthAction } from './auth-actions';
import { PlayerAction } from './player-actions';
import { SaveAction } from './save-actions';
import { TeamAction } from './team-actions';

export type Action = AuthAction | PlayerAction | TeamAction | SaveAction;
