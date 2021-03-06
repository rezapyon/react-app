import React, { PureComponent } from 'react';
import AppCss from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/WithClass';
// import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

export const AuthContext = React.createContext(false);

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor', props);
    this.state = {
      persons: [
        { id: "W1", name: 'Chaeyoung', age: 19, blood: 'O', group: 'TWICE' },
        { id: "W2", name: 'Wonyoung', age: 13, blood: 'O', group: 'Produce48' },
        { id: "W3", name: 'Yena', age: 19, blood: 'A', group: 'Produce48' }
      ],
      otherState: 'Others',
      showPersons: false,
      toggleClicked: 0,
      authenticated : false
    }
  }

  // state = {
  //   persons: [
  //     { id:"W1", name: 'Chaeyoung', age: 19, blood: 'O', group: 'TWICE'},
  //     { id:"W2", name: 'Wonyoung', age: 13, blood: 'O', group: 'Produce48'},
  //     { id:"W3", name: 'Yena', age: 19, blood: 'A', group: 'Produce48'}
  //   ],
  //   otherState: 'Others',
  //   showPersons: false
  // }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()');
  }

  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE App.js] Inside componentWillReceiveProps()', nextProps);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE App.js] Inside shouldComponentUpdate()', nextProps, nextState);
  //   return nextState.persons !== this.state.persons || 
  //     nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside componentWillUpdate()', nextProps, nextState);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('[UPDATE App.js] Inside getDerivedStateFromProps()', nextProps, prevState);
    
    return prevState;
  }

  getSnapshotBeforeUpdate() {
    console.log('[UPDATE App.js] Inside getSnapshotBeforeUpdate()');
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js] Inside componentDidUpdate()');
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
    this.setState( (prevState, props) => { 
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice(); [ALTERNATIF]
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  loginHandler = () => {
    this.setState({authenticated:true});
  }

  render() {
    console.log('[App.js] Inside render()');
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.groupChangedHandler} />
    };

    return (
      <React.Fragment>
        <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
          login={this.loginHandler} />
          <AuthContext.Provider value={this.state.authenticated}>
            {persons}
          </AuthContext.Provider>
      </React.Fragment>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'I\'m Chaeyoung\'s Husband'));
  }
}

export default withClass(App, AppCss.App);
