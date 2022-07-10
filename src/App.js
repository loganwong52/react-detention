import React from 'react';
import './App.css';

function App() {

  // functional component
  const displayPhrase = () => {
    return (
      <p className='chalkWords'>
        I will never mutate state or props directly.
      </p>
    )
  }

  // render
  const renderText = () => {
    let elements = []
    for (let i = 0; i < 100; i++) {
      elements.push(
        displayPhrase()
      )
    }
    return elements
  }

  return (
    <div className="App">
      {renderText()}
    </div>
  );
}

export default App;
