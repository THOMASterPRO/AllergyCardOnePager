import './App.css'
import Beams from './bits/beams/Beams';


function App() {
  return (
    <>
      <div className='header'>
        <h1 className='title'>AllergyCard</h1>
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
      </div>
      <div className='second'>

      </div>
    </>
  )
}

export default App
