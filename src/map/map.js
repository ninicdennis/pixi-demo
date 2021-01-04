import {Stage, Sprite, Container} from 'react-pixi-fiber'
import wall from '../wall.jpg'
import * as PIXI from 'pixi.js'
import {Store} from '../store/store'
import {createHook} from 'react-sweet-state'
import { useEffect } from 'react'
const Map = (props) => {
    const useData = createHook(Store);
    const [state, actions] = useData()
    const level = [
        'wall','wall','wall','wall','wall','wall','wall','wall','wall','wall',
        'wall','----','----','----','----','----','----','----','----','wall',
        'wall','----','----','----','----','----','----','----','----','wall',
        'wall','----','----','----','----','----','----','----','----','wall',
        'wall','----','----','----','----','----','----','----','----','wall',
        'wall','----','----','----','----','----','----','----','----','wall',
        'wall','----','----','----','----','----','----','----','----','wall',
        'wall','----','----','----','----','----','----','----','----','wall',
        'wall','----','----','----','----','----','----','----','----','wall',
        'wall','wall','wall','wall','wall','wall','wall','wall','wall','wall',
    ]
    let levelData = [];
    useEffect(() => {
        actions.mapData(levelData)
        console.log(state)
    }, [])

    const Wall = (props) => {
        return <Sprite texture = {PIXI.Texture.from(wall)} {...props} />
      }
      let y = 0
      return(
          <Container>
              {level.map((id, x) => {
                  if (x % 10 === 0 && x != 0) y+= 60
                  if(id === 'wall') {
                    levelData.push({
                        x: x < 10 ? x * 80 : (x % 10) * 80,
                        y,
                        width: 80,
                        height: 60
                    })
                  }
                  if(id === 'wall') {
                      return (
                          <Wall width = {80} height = {60} x = {x < 10 ? x * 80 : (x % 10) * 80} y = {y}/>
                      )
                  } else {
                      return;
                  }
              })}
            {props.children}
          </Container>
      )

}

export default Map