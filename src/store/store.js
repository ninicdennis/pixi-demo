import { createStore } from 'react-sweet-state'

export const Store = createStore({
  initialState: {
    player: {
      width: 50,
      height: 50,
      x: 250,
      y: 350,
    },
    levelData : []
  },

  actions: {
    mapData: (data) => ({setState, getState}) => {
        console.log(data)
        if (data !== getState().levelData) {
            setState({
                ...getState().player,
                levelData: data
            })
        }
    },

    movement: (dir) => ({setState, getState}) => {
        const collisionCheck = (player, obj) => {
            return player.x + player.width > obj.x && player.x < obj.x + obj.width && player.y + player.height > obj.y && player.y < obj.y + obj.height;
            }
                getState().levelData.forEach(obj => {
                    if(collisionCheck(getState().player, obj)) {
                        
                    }
                })
      switch(dir) {
        case 'wa':
          setState({
            player: {
                    ...getState().player,
                x: getState().player.x - 4,
                y: getState().player.y - 1
                }
            })
          break
        case 'wd':
          setState({
            player: {
                ...getState().player,
              x: getState().player.x + 4,
              y: getState().player.y + 1
            }
          })
          break
        case 'sa':
          setState({
            player: {
                ...getState().player,
              x: getState().player.x - 4,
              y: getState().player.y + 1
            }
          })
          break
        case 'sd':
          setState({
            player: {
                ...getState().player,
              x: getState().player.x + 4,
              y: getState().player.y - 1
            }
          })
          break
        case 'w':
            setState({
            player: {
                ...getState().player,
                x: getState().player.x,
                y: getState().player.y - 5
                }
            })
          break
        case 's':
          setState({
          player: {
                ...getState().player,
                x: getState().player.x,
                y: getState().player.y + 5
          }
          })
          break
        case 'a':
        setState({
          player: {
                ...getState().player,
                x: getState().player.x  - 5,
                y: getState().player.y
          }
          })
         break
        case 'd':
          setState({
          player: {
                ...getState().player,
                x: getState().player.x  + 5,
                y: getState().player.y
          }
          })
          break
      }
    }
  }
})

