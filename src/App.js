import React from 'react';
import "./index.css";
import logo from './logo.svg';
const { useState, useEffect } = React;

function App() {
  const [item, setItem] = useState([
    {
      id: 1,
      text: "Hello World",
      title: "Interview as a software engineer at Google.",
      image: logo
    },
    {
      id: 2,
      text: "Programming",
      title: "Stop playing game from now then started pogram.",
      image: logo
    },
    {
      id: 3,
      text: "Technologies",
      title: "Learn new technologies to build front end framework.",
      image: logo
    },
    {
      id: 4,
      text: "Google Interview",
      title: "Got an interview with Clèment Mehailescu.",
      image: logo
    }
  ])
  const [counter, setCounter] = useState(0);
  const len = item.length;
  function nextFunction() {
    setCounter(counter + 1)
    if (counter >= item.length - 1) {
      setCounter(0)
    }
  }
  function prevFunction() {
    setCounter(counter - 1);
    if (counter < 1) {
      setCounter(len - 1);
    }
  }
  return (
    <div className="container">
      <button onClick={prevFunction}>Prev</button>
      <div className="item">
        <img src={item[counter].image} height="50px" className="rotate" />
        <h3 style={{ borderBottom: "0.1em solid #000", padding: "0.2em 0" }}>{item[counter].text}</h3>
        <p>{item[counter].title}</p>
        <i>{item[counter].id}</i>
      </div>
      <button onClick={nextFunction}>Next</button>
    </div>
  )
}
export default App;
