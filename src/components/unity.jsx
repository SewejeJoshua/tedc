import React, { Component } from 'react';
import './welcome-page.css';

class unity extends Component {
    constructor (props) {
        super (props)

    }



    render () {
        return (
            <div className='first-view' id='home'>
                <div className='first-view-content'> 
                    <h1 className='context-one'>Lorem Lorem Lorem Lorem Lorem Lorem Lorem</h1>
                    <p className='context-two'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, a explicabo? Sunt voluptatibus, </p>
                    <button className='context-three'>Contact us</button>
                </div>
            </div>
        )
    }
}

export default unity;