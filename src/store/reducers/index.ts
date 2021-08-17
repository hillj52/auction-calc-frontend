import { combineReducers } from 'redux';
import authReducer from './auth-reducer';
import playersReducer from './players-reducer';
import teamsReducer from './teams-reducer';

const reducers = combineReducers({
  auth: authReducer,
  players: playersReducer,
  teams: teamsReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
