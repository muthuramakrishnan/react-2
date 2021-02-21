import React, {useState} from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
    {
        label: 'Afrikans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label : 'Tamil',
        value: 'TA'
    },
    {
        label: 'Hindi',
        value: 'hi'
    }
]

const Translate = () => {

    const [ language, setLanguage ] = useState(options[0]);
    const [ text, setText ] = useState('');

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label htmlFor="">Enter Text</label>
                    <input type="text" value = {text} onChange = { (e) => {setText(e.target.value)} }/>
                </div>
            </div>
            <Dropdown label = "Select a Language" options = {options} selected = {language} onSelectedChange = {setLanguage}></Dropdown>
            <hr/>
            <h3 className="ui header">
                <Convert language = {language} text = {text}></Convert>
            </h3>
        </div>
    )
}

export default Translate;