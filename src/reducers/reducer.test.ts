import { IplayerState, PlayerActionTypes } from '../constants/playerTypes';
import { playerReducer } from './player';
import { AppState } from './index';
import { objectResponseApiPlayes, filterByAgeEqual26 } from '../util/test/mockups'
import { getAge } from './util'

const initialState: IplayerState = {
  players: [],
  filteredPlayers: [],
}

const getInitialState = (initial?: Partial<AppState>) => initialState

describe('player reducer', () => {
  describe('should return the initial state', () => {
    it('should match a snapshot', () => {
      const initialState = getInitialState();
      expect(playerReducer(undefined, { type: PlayerActionTypes.GET_ALL, payload: []})).toEqual(initialState);
    });
  });

  describe('adding players', () => {
    it('should add player', () => {
      const initialState = getInitialState();
      expect(initialState.players).toHaveLength(0);
      const state = playerReducer(initialState, { type: PlayerActionTypes.GET_ALL, payload: objectResponseApiPlayes});
      const response = objectResponseApiPlayes.map(player => ({ ...player, age: getAge(player.dateOfBirth) }))
      expect(state.players).toEqual(response);
      expect(state.filteredPlayers).toEqual(response);
    });
  });

  describe('filter players', () => {
    it('should filter players', () => {
      const initialState = getInitialState();
      const prevState = playerReducer(initialState, { type: PlayerActionTypes.GET_ALL, payload: objectResponseApiPlayes});
      const response = objectResponseApiPlayes.map(player => ({ ...player, age: getAge(player.dateOfBirth) }))
      const state = playerReducer(prevState, { type: PlayerActionTypes.APPLY_FILTER, payload: { name: '', position: 'none', age: 26}});
      expect(state.players).toEqual(response);
      expect(state.filteredPlayers).toEqual(filterByAgeEqual26);
    });
  });
});