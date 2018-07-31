import React, {Component} from 'react';
import PersonCss from './Person.css';

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] Inside Constructor', props);
    }

    componentWillMount(){
        console.log('[Person.js] Inside componentWillMount()');
      }
    
    componentDidMount(){
        console.log('[Person.js] Inside componentDidMount()');
    }

    render(){
        console.log('[Person.js] Inside render()');
        const children = (this.props.children) ? '(' + this.props.children + ')' : '';
        // const rnd = Math.random();

        // if(rnd > 0.7){
        //     throw new Error('ANIYO!');
        // }
        return (
            <div className={PersonCss.Person}>
                <p onClick={this.props.clickElement}> {this.props.name} is {this.props.age} years old, she has {this.props.blood} blood type and she's part of {this.props.group}. <b>{children}</b></p>
                <input type="text" onChange={this.props.changedElement} value={this.props.group}/>
            </div>
        );
    }
};

export default Person;