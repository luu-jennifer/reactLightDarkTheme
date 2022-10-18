import logo from './logo.svg';
import './App.css';

function App() {
  // any other logic can go INSIDE  the component but OUTSIDE of the return
  function handleClick() {
    console.log('Checkbox has been checked ✅');
  }

  // can also be written like this:
  // const handleClick = () => {
  //   console.log('Checkbox has been checked ✅');
  // }

  // this is what will be rendered on the page
  return (
    <div className="App">
      <form action="">
        <fieldset>
          <legend>Choose your theme:</legend>
          
          <label htmlFor="theme"></label>
          <input type="checkbox" name="light" value="light" onClick={ handleClick }  id="theme" />
        </fieldset>
      </form>
    </div>
  );
}

export default App;