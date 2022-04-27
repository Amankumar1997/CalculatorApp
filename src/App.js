import React,{useState} from 'react';
import logo from './logo.svg';

import './App.css';

function App() {
//  ill use hook for result 
const [result ,setResult]=useState("");

const onClickHandler=(e)=>{
setResult(result.concat(e.target.value))
}
//  function for clear display
const clearDisplay=()=>{
  setResult("");
}

//  calcullate result fucntio
const calculate=()=>{
  setResult(eval(result.toString()))
}
  return (
    <div className="App">

      <div className="calc">
    <input type="text" placeholder="0" id="answer" value={result}/>
    <input type="button" value="9" className="button" onClick={onClickHandler}/>
    <input type="button" value="8" className="button"onClick={onClickHandler}/>
    <input type="button" value="7"className="button"onClick={onClickHandler}/>
    <input type="button" value="6"className="button"onClick={onClickHandler}/>
    <input type="button" value="5"className="button"onClick={onClickHandler}/>
    <input type="button" value="4"className="button"onClick={onClickHandler}/>
    <input type="button" value="3"className="button"onClick={onClickHandler}/>
    <input type="button" value="2"className="button"onClick={onClickHandler}/>
    <input type="button" value="1"className="button"onClick={onClickHandler}/>
    <input type="button" value="0"className="button"onClick={onClickHandler}/>
    <input type="button" value="."className="button1"onClick={onClickHandler}/>
    <input type="button" value="+"className="button1"onClick={onClickHandler}/>
    <input type="button" value="-"className="button1"onClick={onClickHandler}/>
    <input type="button" value="*"className="button1"onClick={onClickHandler}/>
    <input type="button" value="/"className="button1"onClick={onClickHandler}/>
    <input type="button" value="%"className="button1"onClick={onClickHandler}/>
    <input type="button" value="clr"className="button3"onClick={clearDisplay}/>
    <input type="button" value="="className="button3"onClick={calculate}/>
    </div>
    </div>
  );
}

export default App;
