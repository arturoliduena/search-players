import { ActionCreator, Action, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AppState } from '../reducers';

import { IplayerGetAllAction, PlayerActionTypes, IApplyFilterAction, IFilterDate } from '../constants/playerTypes';

// TypeScript infers that this function is returning applyFilterAction
export const applyFilter = (data: IFilterDate): IApplyFilterAction => {
  return {
    type: PlayerActionTypes.APPLY_FILTER,
    payload: data
  }
}

// TypeScript infers that this function is returning allPlayers
export const allPlayers = (players: any): IplayerGetAllAction => {
  return {
    type: PlayerActionTypes.GET_ALL,
    payload: players
  }
}

export const getAllPlayers: ActionCreator<
  ThunkAction<Promise<any>, AppState, null, Action<string>>
> = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await fetch('https://football-players-b31f2.firebaseio.com/players.json');
      const players = await response.json()
      dispatch(
        allPlayers(players)
      );
    } catch (err) {
      console.error(err);
    }
  };
};
