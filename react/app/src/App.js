import './styles/App.css';
import './styles/Button.css';
import { Button, SharedButton } from './components/Buttons';
import { Clock } from './components/Clock';
import { Color } from './components/Color';
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <Button />
      <Clock />
      <SharedButton count={count} onClick={handleClick} />
      <SharedButton count={count} onClick={handleClick} />
      <Color />
    </>
  );
}

export default App;
