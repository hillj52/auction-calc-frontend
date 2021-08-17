import { ActionType } from '../action-types';
import { Team } from '../types/team';

interface FetchTeamsAction {
  type: ActionType.FETCH_TEAMS;
}

interface FetchTeamsSuccessAction {
  type: ActionType.FETCH_TEAMS_SUCCESS;
  teams: Team[];
  inflation: number;
}

interface FetchTeamsErrorAction {
  type: ActionType.FETCH_TEAMS_ERROR;
  error: string;
}

interface AddTeamAction {
  type: ActionType.ADD_TEAM;
}

interface AddTeamSuccessAction {
  type: ActionType.ADD_TEAM_SUCCESS;
  team: Team;
}

interface AddTeamErrorAction {
  type: ActionType.ADD_TEAM_ERROR;
  error: string;
}

interface SetFeaturedTeamAction {
  type: ActionType.SET_FEATURED_TEAM;
  id: string;
}

interface UnsetFeaturedTeamAction {
  type: ActionType.UNSET_FEATURED_TEAM;
}

export type TeamAction =
  | FetchTeamsAction
  | FetchTeamsSuccessAction
  | FetchTeamsErrorAction
  | AddTeamAction
  | AddTeamSuccessAction
  | AddTeamErrorAction
  | SetFeaturedTeamAction
  | UnsetFeaturedTeamAction;
