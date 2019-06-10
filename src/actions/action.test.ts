import { PlayerActionTypes } from '../constants/playerTypes';
import { allPlayers, applyFilter } from './player';
import { objectResponseApiPlayes } from '../util/test/mockups';
import { mockStore, getAction } from '../util/test';

describe("set players", () => {
  it("handles setting players", async () => {
    const store = mockStore();
    store.dispatch(allPlayers(objectResponseApiPlayes));

    const resultAllPlayers = {
      type: PlayerActionTypes.GET_ALL,
      payload: objectResponseApiPlayes
    };
    
    expect(await getAction(store, PlayerActionTypes.GET_ALL)).toEqual(
      resultAllPlayers
    );
  });
});

describe("filter players", () => {
  it("handles filter players", async () => {
    const store = mockStore();
    const filterBy = { name: 'David', position: 'Keeper', age: 30}
    store.dispatch(applyFilter(filterBy));

    const resultFilterPlayers = {
      type: PlayerActionTypes.APPLY_FILTER,
      payload: filterBy
    };
    
    expect(await getAction(store, PlayerActionTypes.APPLY_FILTER)).toEqual(
      resultFilterPlayers
    );
  });
});