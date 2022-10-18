import AccountType from "./AccountType";
// import the useState Hook
import { useState } from "react";

const AccountPage = () => {

    console.log('AccountPage comp is rendering');

    // initialize a state to represent whether the user is logged in
    const [ loggedIn, setLoggedIn ] = useState(false);

    // define a click event handler function
    const handleClick = () => {

        // IF the user loggedIn state is false, use the updater function to update it to true (and vice versa!)
        setLoggedIn(!loggedIn);

    }
    

    return (

        <main>

            {/* attach a click event listener to the button */}
                {/* depending on whether the user is logged in or out, update the text within the button */}
            <button onClick={handleClick}>
                {
                    loggedIn
                        ? 'Logout'
                        : 'Login'
                }
            </button>

            {/* if the user is logged in, then render the AccountType component */}
                {/* (use a ternary here!) */}
            {
                loggedIn
                    ? <AccountType />
                    : null
            }

        </main>
        
    )
}

export default AccountPage;