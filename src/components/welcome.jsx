import React, {Component} from 'react';
import Nav from './top-nav';
import Unity from './unity';
import Mission from './mission';
import Objectives from './objectives';
import Contact from './contact';

class real extends Component {
    constructor(props) {
        super(props)
    }
    render () {
         return (
        <>
           <div> <Nav/> </div>
            <div><Unity/></div>
            <div><Mission/></div>
            <div><Objectives /></div>
            <div><Contact /></div>
        </>
    )
    }
} 

export default real;