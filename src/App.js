import React, { useState } from 'react';
import './App.css'

const App = () => {
  const [calculate, setCalculate] = useState('');

  const qiynat = (value) => {
    setCalculate(n => n + value);
  };

  const natija = () => {
    setCalculate(eval(calculate).toString());
  };

  const clear = () => {
    setCalculate('');
  };

  return (
    <div className="App">
      <input
        type="text"
        value={calculate}
        onChange={(e) => setCalculate(e.target.value)}
        readOnly
        placeholder='Calculator'
      />
      <div className="calculator">
        <button onClick={() => qiynat('1')}>1</button>
        <button onClick={() => qiynat('2')}>2</button>
        <button onClick={() => qiynat('3')}>3</button>
        <button onClick={() => qiynat('+')}>+</button>
        <button onClick={() => qiynat('4')}>4</button>
        <button onClick={() => qiynat('5')}>5</button>
        <button onClick={() => qiynat('6')}>6</button>
        <button onClick={() => qiynat('-')}>-</button>
        <button onClick={() => qiynat('7')}>7</button>
        <button onClick={() => qiynat('8')}>8</button>
        <button onClick={() => qiynat('9')}>9</button>
        <button onClick={() => qiynat('*')}>*</button>
        <button onClick={() => qiynat('0')}>0</button>
        <button onClick={() => qiynat('.')}>.</button>
        <button onClick={() => natija()}>=</button>
        <button onClick={() => clear()}>C</button>
      </div>
    </div>
  );
};

export default App;
