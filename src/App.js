import './App.css';
import {useState} from 'react'
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

  return (
    <>
      <Header />
      <div className='game-container'>
        <Figure />
        <WrongLetters />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
    </>
  );
}

export default App;
