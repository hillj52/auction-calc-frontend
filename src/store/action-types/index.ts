export enum ActionType {
  // Auth actions
  LOGIN = 'login',
  LOGIN_SUCCESS = 'login_success',
  LOGIN_ERROR = 'login_error',
  LOGOUT = 'logout',

  // Player Actions
  FETCH_PLAYERS = 'fetch_players',
  FETCH_PLAYERS_SUCCESS = 'fetch_players_success',
  FETCH_PLAYERS_ERROR = 'fetch_players_error',
  SEARCH_TERM_UPDATED = 'search_term_updated',
  SET_FEATURED_PLAYER = 'set_featured_player',
  UNSET_FEATURED_PLAYER = 'unset_featured_player',

  // Team Actions
  FETCH_TEAMS = 'fetch_teams',
  FETCH_TEAMS_SUCCESS = 'fetch_teams_success',
  FETCH_TEAMS_ERROR = 'fetch_teams_error',
  ADD_TEAM = 'add_team',
  ADD_TEAM_SUCCESS = 'add_team_success',
  ADD_TEAM_ERROR = 'add_team_error',
  SET_FEATURED_TEAM = 'set_featured_team',
  UNSET_FEATURED_TEAM = 'unset_featured_team',

  // Draft actions
  DRAFT_PLAYER = 'draft_player',
  UNDRAFT_PLAYER = 'undraft_player',

  // Save status actions
  SAVE_STATUS = 'save_status',
  SAVE_STATUS_SUCCESS = 'save_status_success',
  SAVE_STATUS_ERROR = 'save_status_error',
}
