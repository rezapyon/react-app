import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = (props) => {
    const children = (props.children) ? '(' + props.children + ')' : '';
    const personStyle = {
        '@media (min-width:500px)':{
            width: '450px'
        }
    }
    return (
        <div className="Person" style={personStyle}>
            <p onClick={props.clickElement}> {props.name} is {props.age} years old, she has {props.blood} blood type and she's part of {props.group}. <b>{children}</b></p>
            <input type="text" onChange={props.changedElement} value={props.group}/>
        </div>
    )
}

export default Radium(person);