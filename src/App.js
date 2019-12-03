import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import {getNextWord} from './helpers/textWorker';

const  App = () => {
  const [wordPosition, setWordPosition] = useState(0);
  const [word, setWord] = useState(getNextWord(wordPosition));
  
  const onClickHandler = () => {
    let newWordPosition = wordPosition+1;
    setWord(getNextWord(newWordPosition));
    setWordPosition(newWordPosition);
  }

  return (
    <div className="App">
      <header className="App-header" onClick={onClickHandler}>
        <div className='originalWord'>{word}</div> 
        <div className='translatedWord'>{word}</div> 
      </header>
    </div>
  );
}

export default App;
