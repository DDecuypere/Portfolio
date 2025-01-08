import React from 'react';

type MenuItemProps = {
    name: string,
    selected: boolean 
}

//if selected add class name
export default function MenuItem(props : MenuItemProps) {
    return (
        <li className={props.selected ? 'menu-selected' : ''}>
                {props.name}
        </li>
    );
}
