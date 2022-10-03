import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import layerBase from './assets/image/layer-base.png'
import layerFront from './assets/image/layer-front.png'
import layerMiddle from './assets/image/layer-middle.png'
import dungeon from './assets/image/dungeon.jpg'
import ground from './assets/image/ground.png'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'


function App() {

  return (
    <div>
      <Parallax pages={2}>
        <ParallaxLayer
        offset={0}
        speed={0.3}
        factor={1}
        style={{backgroundImage: `url(${layerBase})`,
        backgroundSize: 'cover'}}>
        </ParallaxLayer>


        <ParallaxLayer
        offset={0}
        speed={0}
        factor={1}
        style={{backgroundImage: `url(${layerMiddle})`,
        backgroundSize: 'cover'}}>
        </ParallaxLayer>

        <ParallaxLayer
        offset={0}
        speed={0}
        factor={1}
        style={{backgroundImage: `url(${layerFront})`,
        backgroundSize: 'cover'}}>
        </ParallaxLayer>

        <ParallaxLayer
        offset={0.5}
        speed={0}
        factor={1}
        style={{backgroundImage: `url(${ground})`,
        backgroundSize: 'cover'}}>
        </ParallaxLayer>


        <ParallaxLayer
        offset={1}
        speed={0}
        factor={1}
        style={{backgroundImage: `url(${dungeon})`,
        backgroundSize: 'cover'}}>
        </ParallaxLayer>

        <ParallaxLayer offset={0.4} speed={2}>
          <h1>Hello</h1>
        </ParallaxLayer>


        <ParallaxLayer offset={1.5} speed={4}>
          <h1>Next page</h1>
        </ParallaxLayer>

      </Parallax>

    </div>
  )
}

export default App
