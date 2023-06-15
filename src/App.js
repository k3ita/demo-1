import {useState, useEffect} from 'react';
import Todos from './Todos';

function App() {

  const [seconds, setSeconds] = useState(0);
  const [counter, setCounter] = useState(0)
  const [calculation, setCaculation]= useState(0)
  const [info, setInfo] = useState({
    name: 'hhshs',
    age: 12,
    address: "bsgsg"
  })

  const [todos, setTodos] = useState(["List 1", "List 2", "List 3"])

  useEffect(() => {
    setTimeout(() => {
      setSeconds((seconds)=> seconds + 1);
    },2000);
  });

  const handleIncrease = () => {
    setCounter(counter+1)
  }

  const update = () => {
    setInfo({
      ...info,
      bio: "chào"
    })
  }

  useEffect(() => {
    setCaculation(() =>
      counter *2
    );
  }, [counter]);

  return (
    <div className="App">
      <Todos todos={todos} />
      <h2>Time login: {seconds}</h2>
      <h1>{counter}</h1>
      <h1>Calculation: {calculation}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <h1>{JSON.stringify(info)}</h1>
      <button onClick={update}>Update</button>
    </div>
  );
}

export default App;
