function TabButton({buttonName, isSelected, ...props}) {
    return (
        <li>
            <button className={isSelected ? 'active' : undefined} {...props}>{buttonName}</button>
        </li>
    );
}

export default TabButton;