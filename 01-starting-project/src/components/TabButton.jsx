function TabButton(props) {
    function handleClick(){
        console.log("Working...")
    }

    return (
        <li>
            <button onClick={handleClick}>{props.buttonName}</button>
        </li>
    );
}

export default TabButton;