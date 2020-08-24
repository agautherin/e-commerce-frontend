import React from 'react';
import GamesContainer from './container/GamesContainer'

import './App.css';


class App extends React.Component {
  state = {
    games: []
  }

  componentDidMount(){
    this.getGames() 
  }

  getGames = () => {
    fetch('http://localhost:3000/games')
    .then(res => res.json())
    .then(gamesData => this.setState({
      games: gamesData
    }))
  }

  render() { 
    return (
      <div>
        <GamesContainer games={this.state.games}/>
      </div>
      );
  }
}
 
export default App;



