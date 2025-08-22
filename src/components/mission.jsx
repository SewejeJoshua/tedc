import React, {Component} from 'react';
import './top-nav.css';
import Objective from './images/objective.jpg';
 class mission extends Component {
    constructor(props) {
        super(props)

    }



    render () {
        return (
             <div className='second-view' id='mission'>
                            <div className='second-view-content'>
                                <img src={Objective} alt='objective-img' className='context-four'/>
                                <div className='obj'>
                                    <h1 className='context-five' >Our Mission</h1>
                                    <p className='context-six'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, consequuntur vero voluptate quisquam rem nesciunt ad! Ullam deleniti quas, recusandae illum, aperiam debitis a in blanditiis commodi autem inventore libero.</p>
                         </div>
                 </div>
                             
            </div>
        )
    }
 }

 export default mission;