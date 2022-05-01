import './App.css';
import Header from './components/Header.js'
import Figure from './components/Figure.js'


function App() {
  return (
    <>
      <Header />
      <div className='game-container'>
        <Figure />
      </div>
    </>
  );
}

export default App;
