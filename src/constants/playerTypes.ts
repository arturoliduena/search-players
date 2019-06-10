// Define the Player type
export interface Iplayer {
  name: string;
  contractUntil: string;
  dateOfBirth: string;
  jerseyNumber: number;
  nationality: string;
  position: string;
  age?: number;
}

export type IFilterDate = {
  name: string,
  position: string,
  age: number | undefined,
};

// Define the Player State
export interface IplayerState {
  readonly players: Iplayer[];
  readonly filteredPlayers: Iplayer[];
}

// Create Action Constants
export enum PlayerActionTypes {
  GET_ALL = 'GET_ALL',
  APPLY_FILTER = 'APPLY_FILTER',
}

// Interface for Get All Action Type
export interface IplayerGetAllAction {
  type: PlayerActionTypes.GET_ALL;
  payload: Iplayer[];
}

// Interface for Apply filter Action Type
export interface IApplyFilterAction {
  type: PlayerActionTypes.APPLY_FILTER;
  payload: IFilterDate;
}

/* 
Combine the action types with a union
*/
export type PlayerActions = IplayerGetAllAction | IApplyFilterAction;