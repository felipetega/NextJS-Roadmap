import './App.css'
import { useState } from 'react';

function resultado(count) {
  return <p>Balance {count}</p>;
}

function MyButton({ count, onClick, symbol }) {
  return (
    <div>
      <button onClick={onClick}>{symbol}</button>
    </div>
  );
}

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

export default function MyApp() {
  const [count, setCount] = useState(0);

  function clickSum() {
    setCount(count + 1);
  }

  function clickMinus() {
    setCount(count - 1);
  }

  const listItems = products.map(product => (
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  ));

  return (
    <div>
      <h1>Welcome to my app</h1>
      <ul>{listItems}</ul>
      <p>{resultado(count)}</p>
      <MyButton count={count} onClick={clickSum} symbol="+" />
      <MyButton count={count} onClick={clickMinus} symbol="-" />
    </div>
  );
}
