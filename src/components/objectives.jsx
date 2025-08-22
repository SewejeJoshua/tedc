import React, {Component} from 'react'; 
import './welcome-page.css';
import Tutor from './images/tutor.png';
import Learning from './images/online-learning.png';
import Counsel from './images/counsel.png';
import Freelance from './images/freelance.png';
import {Link} from 'react-router-dom'; 
class objective extends Component {
    constructor(props) {
        super (props)
    }


render () {
    return (
            <div className='third-view' id='objectives'>
                    <div className='object-view'>
                        <h1 className='object'>Objectives</h1>
                        <div className='flex-one'>
                            <div className='service-one'> 
                                <img src={Tutor} className='tutor'/>
                                <div className='content-flex-one'>
                                    <h1 className='theme-flex-one'>Teaching</h1>
                                    <p className='para-flex-one'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, consequuntur vero voluptate quisquam rem nesciunt ad! Ullam deleniti quas, recusandae illum, aperiam debitis a in blanditiis commodi autem inventore libero.</p>
                                    <Link to="/teacherForm"><button className='continue-teach'>Signup as a teacher</button></Link>
                                </div>
                                
                            </div>
                            <div className='service-one'>
                                <img src={Learning} className='tutor'/>
                                <div className='content-flex-one'>
                                    <h1 className='theme-flex-one'>Learning</h1>
                                    <p className='para-flex-one'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, consequuntur vero voluptate quisquam rem nesciunt ad! Ullam deleniti quas, recusandae illum, aperiam debitis a in blanditiis commodi autem inventore libero.</p>
                                    <Link to="/studentForm"><button className='continue-learn'>Signup as a student</button></Link>
                                </div>
                            </div>
                        </div>
                            <div className='flex-one'>
                            <div className='service-one'>
                                <img src={Counsel} className='tutor'/>
                                <div className='content-flex-one'>
                                    <h1 className='theme-flex-one'>Counselling</h1>
                                    <p className='para-flex-one'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, consequuntur vero voluptate quisquam rem nesciunt ad! Ullam deleniti quas, recusandae illum, aperiam debitis a in blanditiis commodi autem inventore libero.</p>
                                    <Link to="/counselorForm"><button className='continue-counsel'>Continue as a counsellor</button></Link>
                                </div>
                                
                            </div>
                            <div className='service-one'>
                                <img src={Freelance} className='tutor'/>
                                <div className='content-flex-one'>
                                    <h1 className='theme-flex-one'>Freelancing</h1>
                                    <p className='para-flex-one'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, consequuntur vero voluptate quisquam rem nesciunt ad! Ullam deleniti quas, recusandae illum, aperiam debitis a in blanditiis commodi autem inventore libero.</p>
                                    <Link to="lancerForm"><button className='continue-lancer'>Continue as a freelancer</button></Link>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>      
    )
}

}

export default objective