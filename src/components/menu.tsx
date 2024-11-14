import React, { useState, KeyboardEvent} from 'react';
import MenuItem from './menuItem';
import './../css/components/menu.css';

export default function Menu(){
    const [selected, setSelected] = useState<number>(0);

    function handleKeyPress(e: KeyboardEvent) {
        if (e.key === 'ArrowDown') {
            /**/
        } else if(e.key === 'ArrowUp') {
            /**/
        }
    }

    /*could potentially load the components dynamically by iterating over an array*/
    return (
        <section id='menu'>
            <ul>
                <MenuItem name='Start' href='/'/>
                <MenuItem name='About' href='/'/>
                <MenuItem name='Games' href='/'/>
            </ul>
        </section>
    );
}
