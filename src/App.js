import './App.css';
import {Stage, Sprite} from 'react-pixi-fiber'
import {useState, useEffect} from 'react'
import Player from './player/player'
import {Store} from './store/store'
import {createHook} from 'react-sweet-state'
import Map from './map/map'

const App = () => {
  const useData = createHook(Store);
  const [state, actions] = useData()

  useEffect(() => {
  }, [state])
  return (
    <div style = {{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
    <div style = {{display: 'flex', flexDirection: 'column'}}>
      <p>X Pos:{state.player.x}</p>
      <p>Y Pos:{state.player.y}</p>
    </div>
    <Stage width = {800} height = {600}>
      <Map>
        <Player actions = {actions} state = {state}/>
      </Map>
    </Stage>
    
    </div>
  );
}

export default App;
 