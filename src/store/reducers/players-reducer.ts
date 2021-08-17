import { ActionType } from '../action-types';
import { Action } from '../actions';
import { Player } from '../types';

interface PlayersState {
  players: Player[];
  searchTerm: string;
  featuredPlayer?: Player;
  loading: boolean;
  error?: string;
  inflation: number;
}

const initialState: PlayersState = {
  players: [],
  searchTerm: '',
  loading: false,
  inflation: 1,
};

const reducer = (
  state: PlayersState = initialState,
  action: Action
): PlayersState => {
  switch (action.type) {
    case ActionType.FETCH_PLAYERS:
      return { ...state, loading: true, error: undefined };
    case ActionType.FETCH_PLAYERS_SUCCESS:
      return {
        ...state,
        loading: false,
        players: action.players,
      };
    case ActionType.FETCH_PLAYERS_ERROR:
      return { ...state, loading: false, error: action.error };
    case ActionType.SEARCH_TERM_UPDATED:
      return {
        ...state,
        searchTerm: action.searchTerm,
      };
    case ActionType.SET_FEATURED_PLAYER:
      return {
        ...state,
        featuredPlayer: state.players.find(({ id }) => id === action.id),
      };
    case ActionType.UNSET_FEATURED_PLAYER:
      return { ...state, featuredPlayer: undefined };
    case ActionType.DRAFT_PLAYER: {
      const { id, price } = action;
      const players = state.players.map((player) => {
        if (player.id === id) {
          return { ...player, drafted: true, price };
        } else {
          return { ...player };
        }
      });

      return {
        ...state,
        players,
        featuredPlayer: undefined,
        searchTerm: '',
      };
    }
    case ActionType.UNDRAFT_PLAYER: {
      return {
        ...state,
        players: state.players.map((player) =>
          player.id === action.playerId
            ? { ...player, price: 0, drafted: false }
            : { ...player }
        ),
      };
    }
    case ActionType.SAVE_STATUS_SUCCESS:
      return {
        ...state,
        inflation: action.inflation,
      };
    case ActionType.FETCH_TEAMS_SUCCESS:
      return {
        ...state,
        inflation: action.inflation,
      };
    default:
      return state;
  }
};

export default reducer;
