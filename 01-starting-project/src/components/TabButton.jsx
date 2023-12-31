function TabButton({buttonName, onSelect, isSelected}) {
    return (
        <li>
            <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{buttonName}</button>
        </li>
    );
}

export default TabButton;