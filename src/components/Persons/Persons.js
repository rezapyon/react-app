import React, {PureComponent} from 'react';
import Person from './Person/Person'

class Persons extends PureComponent{
    constructor(props) {
        super(props);
        console.log('[Persons.js] Inside Constructor', props);
    }

    componentWillMount(){
        console.log('[Persons.js] Inside componentWillMount()');
      }
    
    componentDidMount(){
        console.log('[Persons.js] Inside componentDidMount()');
    }

    componentWillReceiveProps(nextProps) {
        console.log('[UPDATE Persons.js] Inside componentWillReceiveProps()', nextProps);
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[UPDATE Persons.js] Inside shouldComponentUpdate()', nextProps, nextState);
    //     return nextProps.persons !== this.props.persons || 
    //         nextProps.changed !== this.props.changed ||
    //         nextProps.clicked !== this.props.clicked;
    //     // return true;
    // }

    componentWillUpdate(nextProps, nextState) {
        console.log('[UPDATE Persons.js] Inside componentWillUpdate()', nextProps, nextState);
    }

    componentDidUpdate() {
        console.log('[UPDATE Persons.js] Inside componentDidUpdate()');
    }

    render(){
        console.log('[Persons.js] Inside render()');
        return this.props.persons.map((girl, index) => {
            return <Person 
                key={girl.id}
                clickElement={() => this.props.clicked(index)}
                name={girl.name}
                age={girl.age}
                blood={girl.blood}
                group={girl.group}
                changedElement={(event) => this.props.changed(event, girl.id)}/>
        });
    }
}

export default Persons;