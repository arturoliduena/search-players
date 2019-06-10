import {
  IplayerState,
  PlayerActions,
  PlayerActionTypes,
  Iplayer,
} from '../constants/playerTypes'

import { getAge, search } from './util';

const initialState: IplayerState = {
  players: [],
  filteredPlayers: [],
}

export const playerReducer = (
  state = initialState,
  action: PlayerActions
): IplayerState => {
  switch (action.type) {
    case PlayerActionTypes.GET_ALL:
      const players = getPlayes(action.payload);
      return {
        players: players,
        filteredPlayers: players,
      }
    case PlayerActionTypes.APPLY_FILTER:
      return {
        ...state,
        filteredPlayers: search(action.payload, state.players),
      }
    default:
      return state
  }
}

const getPlayes = (players: Iplayer[]) => {
  return players.map(player => ({ ...player, age: getAge(player.dateOfBirth) }))
}