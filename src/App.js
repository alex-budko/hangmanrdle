import './App.css';
import {useState, useEffect} from 'react'
import Header from './components/Header.js'
import Figure from './components/Figure.js'
import WrongLetters from './components/WrongLetters.js'
import Word from './components/Word.js'

const words = ['application', 'programming', 'interface', 'wizard']
let selectedWord = words[Math.floor(Math.random() * words.length)]

function App() {
  const [playable, setPlayable] = useState(true)
  const [correctLetters, setCorrectLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])

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
            //  showNotification();
            }
          } else {
            if (!wrongLetters.includes(letter)) {
              setWrongLetters(currentLetters => [...wrongLetters, letter])
            } else {
            //  showNotification();
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
      </div>
    </>
  );
}

export default App;
