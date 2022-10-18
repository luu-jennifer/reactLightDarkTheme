import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <form action="">
        <fieldset>
          <legend>Choose your them:</legend>
          
          <label htmlFor="theme"></label>
          <input type="checkbox" name="theme" id="theme" />
        </fieldset>
      </form>
    </div>
  );
}

export default App;