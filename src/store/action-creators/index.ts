import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions';
import { RootState } from '../reducers';
import { Player, RosterPosition, Team } from '../types';

export const login =
  (email: string, password: string) => async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.LOGIN });
    console.log(process.env.REACT_APP_API_URL);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/auth/signIn`,
        { email, password }
      );
      if (response.status === 200) {
        dispatch({ type: ActionType.LOGIN_SUCCESS, apiKey: response.data });
      }
    } catch (err) {
      dispatch({ type: ActionType.LOGIN_ERROR });
    }
  };

export const fetchPlayers =
  () => async (dispatch: Dispatch<Action>, getState: () => RootState) => {
    dispatch({ type: ActionType.FETCH_PLAYERS });
    try {
      const { data } = await axios.get<Player[]>(
        `${process.env.REACT_APP_API_URL}/api/players`,
        {
          headers: {
            Authorization: getState().auth.apiKey,
          },
        }
      );
      dispatch({ type: ActionType.FETCH_PLAYERS_SUCCESS, players: data });
    } catch (error) {
      dispatch({ type: ActionType.FETCH_PLAYERS_ERROR, error });
    }
  };

export const updatePlayerSearchTerm =
  (searchTerm: string) => async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.SEARCH_TERM_UPDATED, searchTerm });
  };

interface GetTeamsResponse {
  teams: Team[];
  inflation: number;
}

export const fetchTeams =
  () => async (dispatch: Dispatch<Action>, getState: () => RootState) => {
    dispatch({ type: ActionType.FETCH_TEAMS });
    try {
      const {
        data: { teams, inflation },
      } = await axios.get<GetTeamsResponse>(
        `${process.env.REACT_APP_API_URL}/api/teams`,
        {
          headers: {
            Authorization: getState().auth.apiKey,
          },
        }
      );
      dispatch({ type: ActionType.FETCH_TEAMS_SUCCESS, teams, inflation });
    } catch (error) {
      dispatch({ type: ActionType.FETCH_TEAMS_ERROR, error });
    }
  };

interface AddTeamArgs {
  name: string;
  owner: string;
}

export const addTeam =
  ({ name, owner }: AddTeamArgs) =>
  async (dispatch: Dispatch<Action>, getState: () => RootState) => {
    dispatch({ type: ActionType.ADD_TEAM });
    try {
      const { data } = await axios.post<Team>(
        `${process.env.REACT_APP_API_URL}/api/teams/createTeam`,
        {
          name,
          owner,
        },
        {
          headers: {
            Authorization: getState().auth.apiKey,
          },
        }
      );
      dispatch({ type: ActionType.ADD_TEAM_SUCCESS, team: data });
    } catch (error) {
      dispatch({ type: ActionType.ADD_TEAM_ERROR, error });
    }
  };

export const setFeaturedPlayer =
  (playerId: string) => async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.SET_FEATURED_PLAYER, id: playerId });
  };

export const unsetFeaturedPlayer = () => async (dispatch: Dispatch<Action>) => {
  dispatch({ type: ActionType.UNSET_FEATURED_PLAYER });
};

interface DraftPlayerResponse {
  team: Team;
  inflation: number;
}

export const draftPlayer =
  (
    player: Player,
    price: number,
    teamId: string,
    rosterPosition: RosterPosition
  ) =>
  async (dispatch: Dispatch<Action>, getState: () => RootState) => {
    dispatch({
      type: ActionType.DRAFT_PLAYER,
      id: player.id,
      price,
      teamId,
      player,
      rosterPosition,
    });
    dispatch({ type: ActionType.SAVE_STATUS });
    try {
      const {
        data: { inflation },
      } = await axios.post<DraftPlayerResponse>(
        `${process.env.REACT_APP_API_URL}/api/draft/draftPlayer`,
        {
          playerId: player.id,
          teamId,
          position: rosterPosition,
          price,
        },
        {
          headers: {
            Authorization: getState().auth.apiKey,
          },
        }
      );
      dispatch({ type: ActionType.SAVE_STATUS_SUCCESS, inflation });
    } catch (error) {
      dispatch({ type: ActionType.SAVE_STATUS_ERROR, error });
    }
  };

export const undraftPlayer =
  (playerId: string, teamId: string, position: RosterPosition, price: number) =>
  async (dispatch: Dispatch<Action>, getState: () => RootState) => {
    dispatch({
      type: ActionType.UNDRAFT_PLAYER,
      playerId,
      teamId,
      position,
      price,
    });
    dispatch({ type: ActionType.SAVE_STATUS });
    try {
      const {
        data: { inflation },
      } = await axios.post<DraftPlayerResponse>(
        `${process.env.REACT_APP_API_URL}/api/draft/undraftPlayer`,
        {
          playerId,
          teamId,
          position,
          price,
        },
        {
          headers: {
            Authorization: getState().auth.apiKey,
          },
        }
      );
      dispatch({ type: ActionType.SAVE_STATUS_SUCCESS, inflation });
    } catch (error) {
      dispatch({ type: ActionType.SAVE_STATUS_ERROR, error });
    }
  };

export const setFeaturedTeam =
  (teamId: string) => async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.SET_FEATURED_TEAM, id: teamId });
  };

export const unsetFeaturedTeam = () => async (dispatch: Dispatch<Action>) => {
  dispatch({ type: ActionType.UNSET_FEATURED_TEAM });
};
