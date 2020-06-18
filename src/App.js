import React, {useState} from 'react';

const App = () => {
  const [count, setCount] = useState(1);
  return (
    <div className="App">
      <h1>Hello! {count}</h1>
      <button onClick={() => setCount(count+1)}>Increment</button>
      <button onClick={() => setCount(count-1)}>Decrement</button>
    </div>
  );
}

export default App;