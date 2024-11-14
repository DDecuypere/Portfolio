import React from 'react';

type MenuItemProps = {
    name: string,
    href: string
}

export default function MenuItem(props : MenuItemProps) {
    return (
        <li>
            <a href={props.href}>{props.name}</a>
        </li>
    );
}