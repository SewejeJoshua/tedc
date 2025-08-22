import React, {Component} from 'react';
import './welcome-page.css';
import objective from './objectives';
class contact extends Component {
    constructor (props) {
        super (props)
        this.state ={
            gContact: '',
            mContact: ''
        } 
         
    }
     gmailContact = (event) => {
        this.setState({gContact: event.target.value});
       
    }
    messageContact = (event) => {
        this.setState({mContact: event.target.value});
    }
    submitContact = (event) => {
        alert(`${this.state.gContact}. ${this.state.mContact}`);
    }


    render () {
        return (
            <div className='contact-us' id='contact'>
                <div className='contact-now'>
                <h1 className='contact-login' id="scroll-to-contact">Contact us</h1>
                <form onSubmit={this.submitContact}>
                <input type='text' placeholder='Gmail'className='contact-mail'onChange={this.gmailContact} required/> <br/>
                <textarea cols={50} rows={10} placeholder='Message' className='contact-message' onChange={this.messageContact} required/> <br/>
                <button className='contact-submit'>Submit</button>
                </form>
                </div>
            </div>
        )
    }
}

export default contact;