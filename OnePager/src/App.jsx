import './App.css'
import Beams from './bits/beams/Beams';
import allergyScreenshot from './img/allergyScreenshot.PNG';
import step1 from './img/step1.jpeg';
import step2 from './img/step2.PNG';
import step3 from './img/step3.PNG';
import step32 from './img/step3,2.PNG';
import step4 from './img/step4.PNG';



function App() {
  return (
    <>
      <div className='beams'>
        <Beams
          beamWidth={3}
          beamHeight={30}
          beamNumber={5}
          lightColor="#d29dce"
          speed={3}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={30}
        />
      </div>
      <div className='header'>
        <div className='headerBlock'>
          <div className='titleBlock'>
            <h1 className='title'>Allergy</h1>
            <h1 className='title'>Card</h1>
          </div>
          <p className='headliner'>Digital allergy cards that speak the local language for you.</p>
        </div>
        <img
          className='screenshot'
          src={allergyScreenshot}
          alt='AllergyCard screenshot'
        />
      </div>
      <div className='app'>
        <div className='second'>
          <h1>Pains</h1>
          <ul>
            <li> Trouble communicating in foreign countries</li>
            <li> Typing allergy messages in translation tools over and over, creates repetition</li>
            <li> Translation apps tend to make mistakes</li>
          </ul>
          <h1>Gains</h1>
          <ul>
            <li> Solution that translates automatically</li>
            <li> Annoying repetition vanishes</li>
            <li> EU translation for accuracy</li>
          </ul>
        </div>
        <div className='third'>
          <h1>How it works</h1>
          <div className='stepGrid'>
            <div className='stepItem'>
              <div className='step'>
                <h1>1.</h1>
                <p>Select your allergies and the severity</p>
              </div>
              <img
                className='stepImg'
                src={step1}
                alt='AllergyCard screenshot'
              />
              <div className='divider' />
            </div>

            <div className='stepItem'>
              <div className='step'>
                <h1>2.</h1>
                <p>Save your settings and choose the languages you'd like your card to be in.</p>
              </div>
              <img
                className='stepImg'
                src={step2}
                alt='AllergyCard screenshot'
              />
              <div className='divider' />
            </div>

            <div className='stepItem'>
              <div className='step'>
                <h1>3.</h1>
                <p>Show your card in a restaurant</p>
              </div>
              <img
                className='stepImg'
                src={step3}
                alt='AllergyCard screenshot'
              />
              {/* <img
                className='stepImg'
                src={step32}
                alt='AllergyCard screenshot'
              /> */}
              <div className='divider' />
            </div>

            <div className='stepItem'>
              <div className='step'>
                <h1>4.</h1>
                <p>Have someone scan the QR for ease of use.</p>
              </div>
              <img
                className='stepImg'
                src={step4}
                alt='AllergyCard screenshot'
              />

              <div className='divider' />
            </div>
          </div>
        </div>
        <div class='fourth'>
          <h1>Key Features</h1>
          <ul>
            <li> Generate custom allergy cards</li>
            <li> Translate cards to desired language</li>
            <li> Partner site to show scanned allergy cards</li>
          </ul>
        </div>
        <div className='fifth'>
          <h1>Target Audience</h1>
          <h2>People with food allergies who like to eat out in countries in europe where they dont speak the language.</h2>
        </div>
        <div className='sixth'>
          <h1>What makes it different?</h1>
          <table className='differenceTable'>
            <tr>
              <th>AllergyCard</th>
              <th>Physical cards</th>
              <th>Digital options</th>
            </tr>
            <tr>
              <td>Automatic translation</td>
              <td>New card for every language</td>
              <td>Repetitive task of typing message</td>
            </tr>
            <tr>
              <td>Instantly updateble</td>
              <td>New card if information isn't correct</td>
              <td>No way to save allergies</td>
            </tr>
            <tr>
              <td>Partner site that shows scanned card</td>
              <td>Give card to the person and hope you get it back</td>
              <td>Waiter has to remember or write down info, which can lead to miscommunication</td>
            </tr>
          </table>
        </div>
        
      </div>
      <div className='footer'>
          <h1>Made by Thomas Bezemer</h1>
          <h2>This project was made for the subject Personal Learning Environment</h2>
        </div>
    </>
  )
}

export default App
