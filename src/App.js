import './App.css';

// in order to track state - AKA any information that is changing on the page - we need to import the useState Hook from the react library
  // a Hook is just a function!
  // you only have to do this once per component!
import { useState } from 'react';


function App() {

  // any other logic can go INSIDE the component but OUTSIDE of the return
  function handleClick() {
    console.log('Checkbox has been checked :white_check_mark:');

    // DO NOT EVER MANIPULATE THE DOM DIRECTLY IN REACT!!!!!!
      // so - we cannot do this (React will yell at us)
    const page = document.querySelector('App');
    page.classList.addClass('dark-theme');
    
  }


  // How do we tell React to track a change that is happening and update (AKA re-render) the component accordingly?

  const firstState = useState();
  // this gives us back an array with 2 values: undefined + a function
  console.log(firstState);

  const stateWithArg = useState('HBD TRISTAN!!!');
  // this gives us back an array with 2 values: the argument we passed in + the same function
  console.log(stateWithArg);

  // destructure both values from the array that the useState hook returns
    // 0 - the state variable (at its starting value)
    // 1 - the function we will use to update this state
  const [ clicks, setClicks ] = useState(0);

  // let's declare a state to track whether the light OR dark theme has been chosen by the user:
  const [ theme, setTheme ] = useState('light-theme');





  // // can also be written like this:
  // const handleClick = () => {
  //   console.log('Checkbox has been checked :white_check_mark:');
  // }


  // this is what will be rendered on the page
  return (
    <div className="App">
      <form action="">
        <fieldset>
          <legend>Choose your theme:</legend>

          <label htmlFor="theme">Check for dark theme:</label>
          <input type="checkbox" id="theme" value="light" name="light" onClick={ handleClick } />
        </fieldset>
      </form>
    </div>
  );
}

export default App;