import React from 'react';
import Accordion from './Components/Accordion';
import Search from './Components/Search';

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

export default () => {
    return (
        <div>
            {/* <Accordion items = {items}></Accordion> */}
            <Search></Search>
        </div>
    )
}