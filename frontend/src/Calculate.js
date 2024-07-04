import logo from './logo.svg';
import './App.css';
import './Calculate.css';

function Title() {
  return (
    <div className="App">
      <h1>Calculate</h1>
    </div>
  );
}

function Input() {
  return (
    <div className="App input-container">
      <input type="number" />
      <input type="text" />
      <input type="number" />
    </div>
  );
}

function StartButton() {
  return (
    <div className="App">
      <input type="button" value="=" className="start-button" />
    </div>
  );
}

function Calculate() {
  return (
    <div>
      <Title />
      <Input />
      <StartButton />
    </div>
  );
}

export default Calculate;