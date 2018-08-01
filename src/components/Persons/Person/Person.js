import React, {Component} from 'react';
import PersonCss from './Person.css';
import withClass from '../../../hoc/WithClass';
import PropTypes from 'prop-types';

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] Inside Constructor', props);
        this.inputElement = React.createRef();
    }

    componentWillMount(){
        console.log('[Person.js] Inside componentWillMount()');
    }
    
    componentDidMount(){
        console.log('[Person.js] Inside componentDidMount()');
        if(this.props.position === 0){
            this.inputElement.current.focus();
        }
    }

    focus() {
        this.inputElement.current.focus();
    }

    render(){
        console.log('[Person.js] Inside render()');
        const childrenElement = (this.props.children) ? '(' + this.props.children + ')' : '';
        // const rnd = Math.random();

        // if(rnd > 0.7){
        //     throw new Error('ANIYO!');
        // }
        return (
            <React.Fragment>
                <p onClick={this.props.clickElement}> {this.props.name} is {this.props.age} years old, she has {this.props.blood} blood type and she's part of {this.props.group}. <b>{childrenElement}</b></p>
                <input 
                    ref={this.inputElement}
                    type="text" 
                    onChange={this.props.changedElement} 
                    value={this.props.group}/>
            </React.Fragment>
        );
    }
}

Person.propTypes = {
    clickElement: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    blood: PropTypes.string,
    group: PropTypes.string,
    changedElement: PropTypes.func
}

export default withClass(Person, PersonCss.Person);