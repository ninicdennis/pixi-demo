import {Sprite} from 'react-pixi-fiber'
import logo from '../logo192.png'
import * as PIXI from 'pixi.js'
import {useState, useEffect} from 'react'
const Player = (props) => {
    let keys = {}

  
    useEffect(() => { 
      document.addEventListener('keydown', onKeyPress);
      document.addEventListener('keyup', onKeyDown);
      return () => {
        document.removeEventListener('keydown', onKeyPress);
        document.removeEventListener('keyup', onKeyDown);
      }
    }, [])
  
    const onKeyPress = (e) => {
      keys[e.keyCode] = true;
    }
  
    const onKeyDown = (e) => {
      keys[e.keyCode] = false;
    }

    const ticker = new PIXI.Ticker();
    ticker.start();
    ticker.add(() => {
      if(keys['87'] && keys['65']) props.actions.movement('wa')
      else if(keys['87'] && keys['68'] ) props.actions.movement('wd')
      else if(keys['83'] && keys['65'] ) props.actions.movement('sa')
      else if(keys['83'] && keys['68'] ) props.actions.movement('sd')

      if(keys['87'] ) props.actions.movement('w')
      else if (keys['83'] ) props.actions.movement('s')
      else if (keys['65'] ) props.actions.movement('a')
      else if (keys['68'] )  props.actions.movement('d')
    })
  
    const Logo = (props) => {
      return <Sprite texture = {PIXI.Texture.from(logo)} {...props} />;
    }

    return <Logo x = {props.state.player.x} y= {props.state.player.y} height = {props.state.player.height} width = {props.state.player.width}/>
}

export default Player