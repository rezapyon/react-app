import React from 'react';
import './Person.css';

const person = (props) => {
    const children = (props.children) ? '(' + props.children + ')' : '';
    return (
        <div className="Person">
            <p onClick={props.clickElement}> {props.name} is {props.age} years old, she has {props.blood} blood type and she's part of {props.group}. <b>{children}</b></p>
            <input type="text" onChange={props.changedElement} value={props.group}/>
        </div>
    )
}

export default person;