import './App.css';
import {useState, useEffect} from 'react'
import Header from './components/Header.js'
import Figure from './components/Figure.js'
import WrongLetters from './components/WrongLetters.js'
import Word from './components/Word.js'
import Notification from './components/Notification'
import Popup from './components/Popup'

import { showNotification as show } from './helpers/Helpers';

const words = ['application', 'programming', 'interface', 'wizard']
let selectedWord = words[Math.floor(Math.random() * words.length)]

function App() {
  const [playable, setPlayable] = useState(true)
  const [correctLetters, setCorrectLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [showNotification, setShowNotification] = useState([])


  useEffect(() => {
    const handleKeyDown = event => {
      const {key, keyCode} = event
      if (playable) {
        if (keyCode >= 65 && keyCode <= 90) {
          const letter = key.toLowerCase();
    
          if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
              setCorrectLetters(currentLetters => [...currentLetters, letter])
            } else {
              show(setShowNotification)
            }
          } else {
            if (!wrongLetters.includes(letter)) {
              setWrongLetters(currentLetters => [...wrongLetters, letter])
            } else {
              show(setShowNotification)
            }
          }
        }
      }
    }
    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [correctLetters, wrongLetters, playable])

  return (
    <>
      <Header />
      <div className='game-container'>
        <Figure wrongLetters={wrongLetters}/>
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
        <Popup />
        <Notification showNotification={showNotification} />
      </div>
    </>
  );
}

export default App;
