import ControlPanel from "./ControlPanel";
import { useState } from "react";

const AccountType = (props) => {

  console.log('AccountType component has rendered and props:', props);

  // initialize state to keep track of what account type the user has chosen
  const [ account, setAccount ] = useState(null);

  // define an event handler to be called when a selection is made within the form

  const handleChange = (event) => {

    // Update state with the user's choice:
    // AKA grab the value of the chosen radio button and pass that value to the state updater function
    setAccount(event.target.value);

  }

  return (
    <section>

    <p>You are logged in!</p>

    {/* attached an event listener to the form */}

    <form action="" onChange={handleChange}>
      <fieldset>
        <legend>Choose your account type:</legend>
        <label htmlFor="admin">Admin</label>
        <input type="radio" name="accountType" id="admin" value="admin" />

        <label htmlFor="user">User</label>
        <input type="radio" name="accountType" id="user" value="user" />

        <label htmlFor="guest">Guest</label>
        <input type="radio" name="accountType" id="guest" value="guest" />

      </fieldset>
    </form>

    {/* if the user has made an account type selection then render the ControlPanel */}
      {/* pass the user's chosen account type down as property */}
      {
        account
        ? <ControlPanel />
        : null
      }
    </section>
  )
}

export default AccountType