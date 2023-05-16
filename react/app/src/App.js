import './styles/App.css';
import './styles/Button.css';
import { Button, SharedButton } from './components/Buttons';
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <Button />
      <SharedButton count={count} onClick={handleClick} />
      <SharedButton count={count} onClick={handleClick} />
    </>
  );
}

export default App;
