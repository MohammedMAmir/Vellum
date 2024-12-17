import React, { Component } from 'react';
import { render } from 'react-dom'

class CharacterSheet extends Component{
    constructor(props){
        super(props);
        this.props = props;
    }
    
    render() {
        return(
            <div className="character-sheet">
                Hello World!
            </div>
        )
    }
}

export default CharacterSheet

