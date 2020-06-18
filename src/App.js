import React, {useState} from 'react';
import useInput from './useInput';





const App = () => {
  const emailSet = useInput("");
  return (
    <div className="App">
      <h1>Hello!</h1>
      <input placeholder="Your Email plz" {...emailSet} />
    </div>
  );
}

export default App;