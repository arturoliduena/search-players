import React from 'react';

import { connect } from 'react-redux'
import { getAllPlayers, applyFilter } from '../actions/player'
import { IplayerState, Iplayer } from '../constants/playerTypes'
import { AppState } from '../reducers';
import Title from './Title';
import Filter from './Filter';
import Table from './Table';

import { createSelector } from 'reselect'
// selector
const getPlayer = (state: AppState) => state.player;
const getPlayers = (state: AppState) => state.player.players;
const getFilteredPlayers= (state: AppState) => state.player.filteredPlayers;
// reselect function

const getPlayerState = createSelector(
  [ getPlayer ],
  (player) => player
)

const getPlayersState = createSelector(
  [ getPlayers ],
  (players) => players
)

const getFilteredPlayerState = createSelector(
  [ getFilteredPlayers ],
  (filteredPlayers) => filteredPlayers
)


const mapStateToProps = (state: AppState) => ({
  player: getPlayerState(state),
  players: getPlayersState(state),
  filteredPlayers: getFilteredPlayerState(state),
})

const dispatchProps = {
  applyFilter,
  getAllPlayers
};

interface AppProps {
  player: IplayerState,
  getAllPlayers: () => void,
  applyFilter: (data: any) => void
  players: Iplayer[],
  filteredPlayers: Iplayer[],
}

class App extends React.Component<AppProps> {

  componentDidMount(){
    this.props.getAllPlayers();
  }
  
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <a
            className='App-link'
            href='https://github.com/arturoliduena/search-players'
            target='_blank'
            rel='noopener noreferrer'
          >
            Show Code
          </a>
        </header>
        <Title />
        <Filter applyFilter={this.props.applyFilter}/>
        <Table data={this.props.filteredPlayers}/>
      </div>
    )
  }
}


export default connect(mapStateToProps, dispatchProps)(App);