import React from 'react';
import CockpitCss from './Cockpit.css';

const cockpit = (props) => {
    const classes = [];
    let buttonClass = CockpitCss.Button;

    if(props.showPersons){
        buttonClass = [CockpitCss.Button, CockpitCss.Red].join(' ');
    }

    if(props.persons.length <= 2){
      classes.push(CockpitCss.red);
    }

    if(props.persons.length <= 1){
      classes.push(CockpitCss.bold);
    }

    return(
        <React.Fragment>
            <h1>{props.appTitle}</h1>
            <p className={classes.join(' ')}>Here is my wife's and her rivals profile : </p>
            <button
                className={buttonClass}
                onClick={props.clicked}>Toggle Persons</button>
        </React.Fragment>
    );
};

export default cockpit;