const ControlPanel = (props) => {

    console.log('The props object of Control Panel', props);

    return (
        <h2>Here is your {props.accountType} control panel.</h2>
    )
}

export default ControlPanel;