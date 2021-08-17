import { ActionType } from '../action-types';
import { Player, RosterPosition } from '../types';

interface FetchPlayersAction {
  type: ActionType.FETCH_PLAYERS;
}

interface FetchPlayersSuccessAction {
  type: ActionType.FETCH_PLAYERS_SUCCESS;
  players: Player[];
}

interface FetchPlayersErrorAction {
  type: ActionType.FETCH_PLAYERS_ERROR;
  error: string;
}

interface SearchTermUpdatedAction {
  type: ActionType.SEARCH_TERM_UPDATED;
  searchTerm: string;
}

interface SetFeaturedPlayerAction {
  type: ActionType.SET_FEATURED_PLAYER;
  id: string;
}

interface UnsetFeaturedPlayerAction {
  type: ActionType.UNSET_FEATURED_PLAYER;
}

interface DraftPlayerAction {
  type: ActionType.DRAFT_PLAYER;
  id: string;
  price: number;
  teamId: string;
  player: Player;
  rosterPosition: RosterPosition;
}

interface UndraftPlayerAction {
  type: ActionType.UNDRAFT_PLAYER;
  playerId: string;
  teamId: string;
  position: RosterPosition;
  price: number;
}

export type PlayerAction =
  | FetchPlayersAction
  | FetchPlayersSuccessAction
  | FetchPlayersErrorAction
  | SearchTermUpdatedAction
  | SetFeaturedPlayerAction
  | UnsetFeaturedPlayerAction
  | DraftPlayerAction
  | UndraftPlayerAction;
