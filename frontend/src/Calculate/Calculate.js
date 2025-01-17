import React, { useState } from 'react'; /* 김승주 수정 */
import axios from 'axios'; /* 김승주 수정 */
import '../App.css';
import './Calculate.css';

function Title() {
  return (
    <div className="App">
      <h1>Calculate</h1>
    </div>
  );
}

function Input({ setNumber1, setOperator, setNumber2 }) {
  return (
    <div className="App input-container">
      <input type="number" onChange={(e) => setNumber1(e.target.value)} /> {/* 김승주 수정 */}
      <input type="text" onChange={(e) => setOperator(e.target.value)} /> {/* 김승주 수정 */}
      <input type="number" onChange={(e) => setNumber2(e.target.value)} />
    </div>
  );
}
function StartButton({ calculate }) {
  return (
    <div className="App">
      <input type="button" value="=" className="start-button" onClick={calculate} />
    </div>
  );
}

function Calculate() {
  const [number1, setNumber1] = useState('');
  const [operator, setOperator] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState(null);

  const calculate = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/calculate/', {
        a: parseFloat(number1),
        b: parseFloat(number2),
        c: operator,
      });
      setResult(response.data.result);
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <div>
      <Title />
      <Input setNumber1={setNumber1} setOperator={setOperator} setNumber2={setNumber2} />
      <StartButton calculate={calculate} />
      {result !== null && <div className="App result">Result: {result}</div>}
    </div>
  );
}

export default Calculate;