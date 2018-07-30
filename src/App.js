import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Chaeyoung', age: 19, blood: 'O', group: 'TWICE'},
      { name: 'Wonyoung', age: 13, blood: 'O', group: 'Produce48'},
      { name: 'Yena', age: 19, blood: 'A', group: 'Produce48'}
    ],
    otherState: 'Others',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log('button clicked');
    // DON'T DO THIS this.state.person[0].name = 'Son Chaeyoung';

    this.setState({
        persons: [
          { name: newName, age: 19, blood: 'O', group: 'TWICE'},
          { name: 'Jang Wonyoung', age: 13, blood: 'O', group: 'Produce48'},
          { name: 'Choi Yena', age: 19, blood: 'A', group: 'Produce48'}
        ]
    });
  }

  groupChangedHandler = (event) => {
    this.setState({
        persons: [
          { name: 'Chaeyoung', age: 19, blood: 'O', group: 'TWICE'},
          { name: 'Wonyoung', age: 13, blood: 'O', group: event.target.value},
          { name: 'Yena', age: 19, blood: 'A', group: 'Produce48'}
        ]
    });
  }

  tooglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  render() {
    const buttonStyle = {
      backgroundColor: '#fff',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Yo, I'm Chaeyoung's future husband</h1>
        <p>Here is my wife's and her rivals profile : </p>
        <button
          style={buttonStyle}
          onClick={this.tooglePersonsHandler}>Show Name</button>
          { 
            this.state.showPersons === true ? 
            <div>
              <Person 
                name={this.state.persons[0].name}
                age={this.state.persons[0].age}
                blood={this.state.persons[0].blood}
                group={this.state.persons[0].group}/>
              <Person 
                name={this.state.persons[1].name}
                age={this.state.persons[1].age}
                blood={this.state.persons[1].blood}
                group={this.state.persons[1].group}
                clickElement={this.switchNameHandler.bind(this, 'Chaeyoung Son')}
                changedElement={this.groupChangedHandler}>
                  She's the youngest
              </Person>
              <Person 
                name={this.state.persons[2].name}
                age={this.state.persons[2].age}
                blood={this.state.persons[2].blood}
                group={this.state.persons[2].group}/>
            </div> : null
          }
      </div>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'I\'m Chaeyoung\'s Husband'));
  }
}

export default App;
