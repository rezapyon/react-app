import React from 'react';
import PersonCss from './Person.css';

const person = (props) => {
    const children = (props.children) ? '(' + props.children + ')' : '';
    const rnd = Math.random();

    if(rnd > 0.7){
        throw new Error('ANIYO!');
    }
    return (
        <div className={PersonCss.Person}>
            <p onClick={props.clickElement}> {props.name} is {props.age} years old, she has {props.blood} blood type and she's part of {props.group}. <b>{children}</b></p>
            <input type="text" onChange={props.changedElement} value={props.group}/>
        </div>
    )
}

export default person;