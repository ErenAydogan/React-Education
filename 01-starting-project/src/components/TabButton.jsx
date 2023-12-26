function TabButton({buttonName, onSelect}) {
    return (
        <li>
            <button onClick={onSelect}>{buttonName}</button>
        </li>
    );
}

export default TabButton;