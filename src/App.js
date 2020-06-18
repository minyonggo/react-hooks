import React, {useState} from 'react';


const useInput = (initialValue) => {
  const [value, setInput] = useState(initialValue);

  const onChange = (e) => {
    const {
      target: {value}
    } = e;
    setInput(value);
  }

  return {value, onChange};
}


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