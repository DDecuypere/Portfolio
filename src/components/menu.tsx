import React, { useState, KeyboardEvent, useEffect, useRef} from 'react';
import MenuItem from './menuItem';
import './../css/components/menu.css';


export default function Menu(){
    const [selected, setSelected] = useState<number>(0);
    const AMOUNT_OF_MENU_ITEMS: number = 3;
    const menuRef = useRef<HTMLUListElement>(null);

    function handleKeyPress(e: KeyboardEvent) {
        e.preventDefault();

        if (e.key === 'ArrowDown') {
            setSelected((prev) => (prev - 1 + AMOUNT_OF_MENU_ITEMS) % AMOUNT_OF_MENU_ITEMS);
        } else if(e.key === 'ArrowUp') {
            setSelected((prev) => (prev + 1) % AMOUNT_OF_MENU_ITEMS);
        }
    }

    useEffect(() => {
        menuRef.current?.focus();
      }, [/*place values on change, do useEffect again*/])
      

    //could potentially load the components dynamically by iterating over an array
    return (
        <section id='menu'>
            <ul ref={menuRef} onKeyDown={handleKeyPress} onKeyUp={handleKeyPress} tabIndex={0}>
                <MenuItem name='Start' href='/' selected={selected === 0} />
                <MenuItem name='About' href='/' selected={selected === 1}/>
                <MenuItem name='Games' href='/' selected={selected === 2}/>
            </ul>
        </section>
    );
}
