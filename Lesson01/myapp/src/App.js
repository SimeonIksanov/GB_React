import React from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './Message.js';


function App(props)
{
  return (
    <div className="App">
      <header className="App-header">
        <h1>{props.Title}</h1>
      </header>

      <div className="divBody">
        <div>{props.subTitle}</div>
        <div>Lesson 01</div>
        <div>
          <img className="App-logo" src={logo}/>
        </div>
      </div>
        
      <Message text={'this is the text'} someNumber={666}/>
    </div>
  )
}

export default App;
