import React, { useState } from 'react';
import Accordion from './Components/Accordion';
import Search from './Components/Search';
import Dropdown from './Components/Dropdown';
import Translate from './Components/Translate';

const items = [
    {
        title: 'What is React?',
        content: 'React is a frontend javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is favorite among engineers'
    },
    {
        title: 'How to use React?',
        content: 'We use React by creating components'
    }
]

const options = [
    {
        label: 'The color Red',
        value: 'red'
    },
    {
        label: 'The color Green',
        value: 'green'
    },
    {
        label: 'Shade of blue',
        value: 'blue'
    }
]
export default () => {

    const [ selected, setSelected ] = useState(options[0]);
    const [ showDropdown, setShowDropdown ] = useState(true);
    return (
        <div>
            {/* <Accordion items = {items}></Accordion> */}
            {/* <Search></Search> */}
            {/* <button onClick = {() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
            {   showDropdown ?
                <Dropdown options = {options} onSelectedChange = {setSelected} selected = {selected}></Dropdown>
                : null
            } */}

            <Translate></Translate>
        </div>
    )
}