// import React, {Component} from 'react';
// import {Link} from 'react-router-dom'; 
// import './welcome-page.css'; 
// import Nav from './top-nav';
// import Objective from './images/objective.jpg';
// import Tutor from './images/tutor.png';
// import Learning from './images/online-learning.png';
// import Counsel from './images/counsel.png';
// import Freelance from './images/freelance.png';




// class welcome extends Component {
//     constructor (props) {
//         super (props) 
//         this.state ={
//             gContact: '',
//             mContact: ''
//         } 
//     }
//     gmailContact = (event) => {
//         this.setState({gContact: event.target.value});
       
//     }
//     messageContact = (event) => {
//         this.setState({mContact: event.target.value});
//     }
//     submitContact = (event) => {
//         alert(`${this.state.gContact}. ${this.state.mContact}`);
//     }
//     render () {
//         return (
//           <div className='wcm-body'>
//             <div><Nav /></div>
//             <div className='first-view'>
//                 <div className='first-view-content'> 
//                     <h1 className='context-one'>Lorem Lorem Lorem Lorem Lorem Lorem Lorem</h1>
//                     <p className='context-two'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, a explicabo? Sunt voluptatibus, </p>
//                     <button className='context-three'>Contact us</button>
//                 </div>
//             </div>
//             <div className='second-view' id='scroll-to-mission'>
//                 <div className='second-view-content'>
//                     <img src={Objective} alt='objective-img' className='context-four'/>
//                     <div className='obj'>
//                         <h1 className='context-five' >Our Mission</h1>
//                         <p className='context-six'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, consequuntur vero voluptate quisquam rem nesciunt ad! Ullam deleniti quas, recusandae illum, aperiam debitis a in blanditiis commodi autem inventore libero.</p>
//                     </div>
//                 </div>
                 
//             </div>
//             <div className='second-view-content-alias'>
//                    <div className='obj-alias'>
//                         <h1 className='context-five-alias'>Our Mission</h1>
//                         <p className='context-six-alias'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, consequuntur vero voluptate quisquam rem nesciunt ad! Ullam deleniti quas, recusandae illum, aperiam debitis a in blanditiis commodi autem inventore libero.</p>
//                     </div> 
//             </div>
//             <div className='third-view'>
//             <div className='object-view'>
//                 <h1 className='object'>Objectives</h1>
//                 <div className='flex-one'>
//                     <div className='service-one'> 
//                         <img src={Tutor} className='tutor'/>
//                         <div className='content-flex-one'>
//                             <h1 className='theme-flex-one'>Teaching</h1>
//                             <p className='para-flex-one'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, consequuntur vero voluptate quisquam rem nesciunt ad! Ullam deleniti quas, recusandae illum, aperiam debitis a in blanditiis commodi autem inventore libero.</p>

//                         </div>
                        
//                     </div>
//                     <div className='service-one'>
//                         <img src={Learning} className='tutor'/>
//                         <div className='content-flex-one'>
//                             <h1 className='theme-flex-one'>Learning</h1>
//                             <p className='para-flex-one'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, consequuntur vero voluptate quisquam rem nesciunt ad! Ullam deleniti quas, recusandae illum, aperiam debitis a in blanditiis commodi autem inventore libero.</p>
                            
//                         </div>
//                     </div>
//                 </div>
//                     <div className='flex-one'>
//                     <div className='service-one'>
//                         <img src={Counsel} className='tutor'/>
//                         <div className='content-flex-one'>
//                             <h1 className='theme-flex-one'>Counselling</h1>
//                             <p className='para-flex-one'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, consequuntur vero voluptate quisquam rem nesciunt ad! Ullam deleniti quas, recusandae illum, aperiam debitis a in blanditiis commodi autem inventore libero.</p>
                            
//                         </div>
                        
//                     </div>
//                     <div className='service-one'>
//                         <img src={Freelance} className='tutor'/>
//                         <div className='content-flex-one'>
//                             <h1 className='theme-flex-one'>Freelancing</h1>
//                             <p className='para-flex-one'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, consequuntur vero voluptate quisquam rem nesciunt ad! Ullam deleniti quas, recusandae illum, aperiam debitis a in blanditiis commodi autem inventore libero.</p>
                            
//                         </div>
//                     </div>
//                 </div>
//                 </div>
//             </div>
//             <div className='contact-us'>
//                 <div className='contact-now'>
//                 <h1 className='contact-login' id="scroll-to-contact">Contact us</h1>
//                 <form onSubmit={this.submitContact}>
//                 <input type='text' placeholder='Gmail'className='contact-mail'onChange={this.gmailContact} required/> <br/>
//                 <textarea cols={50} rows={10} placeholder='Message' className='contact-message' onChange={this.messageContact} required/> <br/>
//                 <button className='contact-submit'>Submit</button>
//                 </form>
//                 </div>
//             </div>
//             <div className='fourth-view'>
//                 <footer>
//                     <p> All rights reserved. &#169; 2025 </p>
//                 </footer>
//              </div>
//           </div>
          
//         )
//     } 
// }

// export default welcome