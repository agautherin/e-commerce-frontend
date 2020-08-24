import React from 'react'
import Game from '../component/Game'

const GamesContainer = (props) => {
    return ( 
        <div>
            {props.games.map(game => <Game gameObj={game} key={game.id}/>)}
        </div>
     );
}
 
export default GamesContainer;