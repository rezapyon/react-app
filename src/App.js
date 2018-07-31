import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id:"W1", name: 'Chaeyoung', age: 19, blood: 'O', group: 'TWICE'},
      { id:"W2", name: 'Wonyoung', age: 13, blood: 'O', group: 'Produce48'},
      { id:"W3", name: 'Yena', age: 19, blood: 'A', group: 'Produce48'}
    ],
    otherState: 'Others',
    showPersons: false
  }

  groupChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.group = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    // const person = Object.assign({}, this.state.persons[personIndex]);

    this.setState({
        persons: persons
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice(); [ALTERNATIF]
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  render() {
    const buttonStyle = {
      backgroundColor: 'green',
      color: '#fff',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((girl, index) => {
            return <Person 
              key={girl.id}
              clickElement={() => this.deletePersonHandler(index)}
              name={girl.name}
              age={girl.age}
              blood={girl.blood}
              group={girl.group}
              changedElement={(event) => this.groupChangedHandler(event, girl.id)}/>
          })}
        </div>
      );

      buttonStyle.backgroundColor = 'red';
      buttonStyle[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    };

    const classes = [];

    if(this.state.persons.length <= 2){
      classes.push('red');
    }

    if(this.state.persons.length <= 1){
      classes.push('bold');
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Yo, I'm Chaeyoung's future husband</h1>
          <p className={classes.join(' ')}>Here is my wife's and her rivals profile : </p>
          <button
            style={buttonStyle}
            onClick={this.togglePersonsHandler}>Toggle Persons</button>
            {persons}
        </div>
      </StyleRoot>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'I\'m Chaeyoung\'s Husband'));
  }
}

export default Radium(App);
