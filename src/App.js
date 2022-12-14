import './App.css';
// import any components we wish to render within App
import AccountPage from './AccountPage';

// in order to track state - AKA any information that is changing on the page - we need to import the useState Hook from the react library
  // a Hook is just a function!
  // you only have to do this once per component!

// (1) when you know that you need to track a value that is changing within a component, you need to import useState
import { useState } from 'react';


function App() {

  console.log('App component has rendered');

  // any other logic can go INSIDE the component but OUTSIDE of the return

  // (3) determine when and how the state variable should be updated
    // in this case, when the user selects the checkbox, we want to update state and trigger a re-render of the component
  function handleClick() {
    // console.log('Checkbox has been checked ✅');

    // ****************************

    // // DO NOT EVER MANIPULATE THE DOM DIRECTLY IN REACT!!!!!!
    //   // so - we cannot do this (React will yell at us)
    // const page = document.querySelector('App');
    // page.classList.addClass('dark-theme');

    // ****************************

    // if the component has light theme (check the state variable value)
    if (theme === 'light-theme') {
      // update state to represent dark theme using the state updater function

      // (4) use the state updater to pass in the NEW value of state and subsequently update state + re-render the component
      setTheme('dark-theme');
    } else {
      // if not, update it to light theme
      setTheme('light-theme');
    }
    
  }


  // How do we tell React to track a change that is happening and update (AKA re-render) the component accordingly?

  const firstState = useState();
  // this gives us back an array with 2 values: undefined + a function
  // console.log(firstState);

  const stateWithArg = useState('HBD TRISTAN!!!');
  // this gives us back an array with 2 values: the argument we passed in + the same function
  // console.log(stateWithArg);

  // destructure both values from the array that the useState hook returns
    // 0 - the state variable (at its starting value)
    // 1 - the function we will use to update this state
  const [ clicks, setClicks ] = useState(0);

  // (2) call the useState Hook to initialize a variable to represent the value that is changing and extract that variable & its updater function
  // let's declare a state to track whether the light OR dark theme has been chosen by the user:
  const [ theme, setTheme ] = useState('light-theme');
  // console.log('state variable with its starting value:', {theme});
  // console.log('state updater function:', { setTheme });



  // // can also be written like this:
  // const handleClick = () => {
  //   console.log('Checkbox has been checked ✅');
  // }


  // this is what will be rendered on the page
  return (
    // add the state variable as a class 
    // (when it's updated to be dark-theme, the styles will apply)

    // (5) state update triggers a rerender
      // because we are using the state variable value as a CSS class, the new state value is passed in as the container div class (which subsequently affects how the div and its children render on the page)
    <div className={`App ${theme}`}>
      <form action="">
        <fieldset>
          <legend>Choose your theme:</legend>

          <label htmlFor="theme">
            {
              // if the theme is light, prompt the user to select dark (and vice versa)
              theme === 'light-theme'
                ? 'Check for dark theme'
                : 'Un-check for light theme'
            }
          </label>
          <input type="checkbox" id="theme" value="light" name="light" onClick={ handleClick } />
        </fieldset>
      </form>

      {/* render your AccountPage component */}
      <AccountPage />
    </div>
  );
}

export default App;
