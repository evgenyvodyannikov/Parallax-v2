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
    <div className='layers'>
      <Parallax pages={2}>
        <ParallaxLayer
        offset={0}
        speed={0.45}
        factor={1}
        style={{backgroundImage: `url(${layerBase})`,
        backgroundSize: 'cover'}}
        className="layer layer__base"
        >
        </ParallaxLayer>

        <ParallaxLayer 
        offset={0.4} 
        speed={0.15} 
        className="layer layer__header">
          Just a parallax effect
        </ParallaxLayer>

        <ParallaxLayer
        offset={0}
        speed={0.5}
        factor={1}
        style={{backgroundImage: `url(${layerMiddle})`,
        backgroundSize: 'cover'}}
        className="layer">
        </ParallaxLayer>

        <ParallaxLayer
        offset={0}
        speed={0.4}
        factor={1}
        style={{backgroundImage: `url(${layerFront})`,
        backgroundSize: 'cover'}}
        className="layer">
        </ParallaxLayer>

        <ParallaxLayer
        offset={0.8}
        speed={0.2}
        factor={1.5}
        style={{backgroundImage: `url(${dungeon})`,
        backgroundSize: 'cover'}}>
        </ParallaxLayer>

      </Parallax>

    </div>
  )
}

export default App
