import React, { useState, useEffect } from "react";
import twitter from "./twitter.png";
import "./App.css";

function App() {
  const [newQuote, setNewQuote] = useState({
    quote: 'Part of what makes programming difficult is most of the time we’re doing stuff we’ve never done before.',
    author: 'Douglas Crockford'
  });

  const getQuote = () => {
    fetch("https://programming-quotes-api.herokuapp.com/quotes/random")
    .then((response) => response.json())
    .then((data) => {
      setNewQuote({quote : data.en,
      author : data.author});
      
    });
  }
  useEffect(() => {
    getQuote();
  }, []);
  return (
    <div className="App">
      <div id="quote-box">
        <div>
          <p id="text">{newQuote.quote}</p>
          <div id="author">- {newQuote.author}</div>
        </div>
        <div className="icon-wrapper">
          <a href={`https://twitter.com/intent/tweet?text=${newQuote.quote} -${newQuote.author}`} id="tweet-quote" target="_blank">
            <img src={twitter} alt=""></img>
          </a>
          <div>
            <button id="new-quote" onClick={getQuote}>Next Quote</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
