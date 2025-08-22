import React, {Component} from 'react';
import {Link} from 'react-scroll'; 
import './top-nav.css';
import TedLogo from './images/tedlogo.jpg';
import CloseLogo from './images/close.png';
import Menu from './images/menu.png';
import {Helmet} from 'react-helmet';
// import Welcome from './welcome-page'; 




class nav extends Component {
    constructor (props) {
        super (props)
       this.weltypeUser = React.createRef();
       this.sideNav = React.createRef();
       this.menuLogo = React.createRef();
       this.sidetypeUser = React.createRef();
    }
    mission = (event) => {

    }
    sign = (event) => {
        this.weltypeUser.current.style.display = 'block';
     }
     welCan = (event) => {
        this.weltypeUser.current.style.display = 'none';
     }
    menu = (event) => {      
        this.sideNav.current.style.display = 'block'; 
    }
    closeSideNav = (event) => {
        this.sideNav.current.style.display = 'none';
        this.menuLogo.current.style.display = 'flex';
    }
    sideButton = (event) => {
        this.sidetypeUser.current.style.display = 'block';
    }
    render () {
        return (
            
          <div className='nav-body'>
          
            <div className='navigation'>
                <div className='one-half'>
                  <img src={TedLogo} className='ted-logo'/>
                  <h3 className='ted-name'>Tedcomm</h3>
                  
               
                </div>
                <div className='ayatola'>
                 <div className='two-half'>
                    <ul>
                        
                          <Link to="home"><li>Home </li></Link>
                         <Link to="mission"> <li>Mission</li> </Link> 
                          <Link to="objectives"><li>Objective</li></Link>
                          <Link to="/services"><li>Services</li></Link>
                          <Link to="contact"><li>Contact </li></Link>
                        <Link to="/login"><li>Login</li></Link>
                    </ul> 
                </div>
                <div className='but-div'>
                <button className='start' onClick={this.sign}>Start for free</button>
               
                </div>
            </div>
            
                  <img src={Menu} className='menu' onClick={this.menu} ref={this.menuLogo}/>
            </div>
              <div className='wel-typeUser' ref={this.weltypeUser}>
                    <img className='welCancel' src={CloseLogo} onClick={this.welCan}/>
                    <Link to="/teacherForm"><p>As a teacher</p></Link>
                    <Link to="/studentForm"><p>As a student</p></Link>
                    <Link to="/counselorForm"><p>As a counselor</p></Link>
                    <Link to="/lancerForm"><p>As a freelancer</p></Link>
                </div>
               
                  <div className='sideNav' ref={this.sideNav}>
                    <img src={CloseLogo} onClick={this.closeSideNav} className='side-close'/>
                    <p>Home</p>
                    <p>Mission</p>
                    <p>Objective</p>
                    <Link to="/login"><p>Log in</p></Link>
                    <button className='side-button' onClick={this.sideButton}>Sign up fot free</button>
                  <div className='side-typeUser' ref={this.sidetypeUser}> 
                    <Link to="/teacherForm"><p>As a teacher</p></Link>
                    <Link to="/studentForm"><p>As a student</p></Link>
                    <Link to="/counselorForm"><p>As a counselor</p></Link>
                    <Link to="/lancerForm"><p>As a freelancer</p></Link>
                </div>
                  </div>
         
          </div>
        )
    } 
}

export default nav