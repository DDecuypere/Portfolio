import React from 'react';

type MenuItemProps = {
    name: string,
    href: string,
    selected: boolean 
}
//if selected add class name

export default function MenuItem(props : MenuItemProps) {
    return (
        <li className={props.selected ? 'menu-selected' : ''}>
            <a href={props.href}>{props.name}</a>
        </li>
    );
}