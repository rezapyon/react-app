import React from 'react';

const person = (props) => {
    const children = (props.children) ? '(' + props.children + ')' : '';
    return (
        <div>
            <p> {props.name} is {props.age} years old, she has {props.blood} blood type and she's part of {props.group}. <b onClick={props.clickElement}>{children}</b></p>
        </div>
    )
}

export default person;