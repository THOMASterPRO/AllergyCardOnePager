import './App.css'
import Beams from './bits/beams/Beams';
import allergyScreenshot from './img/allergyScreenshot.PNG';


function App() {
  return (
    <>
      <div className='header'>
        <Beams
          beamWidth={3}
          beamHeight={30}
          beamNumber={5}
          lightColor="#ffffff"
          speed={3}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={30}
        />
        <div className='headerContent'>
          <div className='titleBlock'>
            <h1 className='title'>Allergy</h1>
            <h1 className='title'>Card</h1>
          </div>
          <img
            className='screenshot'
            src={allergyScreenshot}
            alt='AllergyCard screenshot'
          />
        </div>
      </div>
      <div className='second'>
        
      </div>
    </>
  )
}

export default App
