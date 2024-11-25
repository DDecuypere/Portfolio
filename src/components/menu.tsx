import React, { useState, KeyboardEvent, useEffect, useRef} from 'react';
import MenuItem from './menuItem';
import './../css/components/menu.css';


export default function Menu(){
    //save state of selected item his index
    const [selected, setSelected] = useState<number>(0);

    //const var for the amount of items in the menu
    const AMOUNT_OF_MENU_ITEMS: number = 3;

    //used to reference to (most of the time) html elements
    const menuRef = useRef<HTMLUListElement>(null);

    //same as eventlistener (use const on non component funcs)
    const handleKeyPress= (e: KeyboardEvent) => {
        e.preventDefault();

        if (e.key === 'ArrowDown') {
            //use prev so selected gets the last value
            setSelected((prev) => (prev - 1 + AMOUNT_OF_MENU_ITEMS) % AMOUNT_OF_MENU_ITEMS);
        } else if(e.key === 'ArrowUp') {
            setSelected((prev) => (prev + 1) % AMOUNT_OF_MENU_ITEMS);
        }
    }

    useEffect(() => {
        menuRef.current?.focus();
        /*on render of this page show keyboard instruction popup*/
      }, [/*place values on change, do useEffect again*/])
      

    //could potentially load the components dynamically by iterating over an array of menu items
    return (
        <section id='menu' ref={menuRef} onKeyDown={handleKeyPress} onKeyUp={handleKeyPress} tabIndex={0}>
            <ul>
                <MenuItem name='Projects' href='/' selected={selected === 0} />
                <MenuItem name='About' href='/' selected={selected === 1}/>
                <MenuItem name='Games' href='/' selected={selected === 2}/>
            </ul>
        </section>
    );
}
