import { ActionType } from '../action-types';
import { Action } from '../actions';
import { RosterPosition, Team } from '../types/team';

interface TeamsState {
  teams: Team[];
  featuredTeam?: Team;
  loading: boolean;
  error?: string;
}

const initialState: TeamsState = {
  teams: [],
  loading: false,
};

const reducer = (
  state: TeamsState = initialState,
  action: Action
): TeamsState => {
  switch (action.type) {
    case ActionType.FETCH_TEAMS:
      return { ...state, loading: true, error: undefined };
    case ActionType.FETCH_TEAMS_SUCCESS:
      return {
        ...state,
        teams: action.teams,
        loading: false,
        error: undefined,
      };
    case ActionType.FETCH_TEAMS_ERROR:
      return { ...state, loading: false, error: action.error };
    case ActionType.ADD_TEAM:
      return { ...state, loading: true, error: undefined };
    case ActionType.ADD_TEAM_SUCCESS:
      return {
        ...state,
        teams: [...state.teams, action.team],
        loading: false,
        error: undefined,
      };
    case ActionType.ADD_TEAM_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case ActionType.DRAFT_PLAYER: {
      const { teamId, player, price, rosterPosition } = action;
      player.price = price;
      const teams = state.teams.map((team) => {
        if (team.id !== teamId) {
          return { ...team };
        }
        if (rosterPosition === RosterPosition.BENCH) {
          if (!team.bench) {
            return { ...team, bench: [player], money: team.money - price };
          } else {
            return {
              ...team,
              bench: [...team.bench, player],
              money: team.money - price,
            };
          }
        } else {
          return {
            ...team,
            [rosterPosition]: player,
            money: team.money - price,
          };
        }
      });
      return {
        ...state,
        teams,
      };
    }
    case ActionType.UNDRAFT_PLAYER: {
      const { teamId, position, price } = action;
      const teams = state.teams.map((team) =>
        team.id === teamId
          ? { ...team, [position]: undefined, money: team.money + price }
          : { ...team }
      );
      return {
        ...state,
        teams,
        featuredTeam: teams.find(({ id }) => id === teamId),
      };
    }
    case ActionType.SET_FEATURED_TEAM:
      return {
        ...state,
        featuredTeam: state.teams.find(({ id }) => id === action.id),
      };
    case ActionType.UNSET_FEATURED_TEAM:
      return {
        ...state,
        featuredTeam: undefined,
      };
    default:
      return state;
  }
};

export default reducer;
