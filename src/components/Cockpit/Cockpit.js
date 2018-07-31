import React from 'react';
import CockpitCss from './Cockpit.css';

const cockpit = (props) => {
    const classes = [];
    let buttonClass = '';

    if(props.showPersons){
        buttonClass = CockpitCss.Red;
    }

    if(props.persons.length <= 2){
      classes.push(CockpitCss.red);
    }

    if(props.persons.length <= 1){
      classes.push(CockpitCss.bold);
    }

    return(
        <div className={CockpitCss.Cockpit}>
            <h1>{props.appTitle}</h1>
            <p className={classes.join(' ')}>Here is my wife's and her rivals profile : </p>
            <button
                className={buttonClass}
                onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default cockpit;