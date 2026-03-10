import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Welcome.css'

const Welcome = () => {
    const navigate = useNavigate();
    
    return (
        <div className='container'>
            <div className="sub-container">
                <div className='container-title-1'>
                    <div className='container-title'>
                        <h2 className='title'>Welcome to PopX</h2>
                        <p className='sub-title'>Lorem ipsum dolor sit amet,<br/>consectetur adipiscing elit,</p>
                    </div>
                    <div className='btn-container'>
                        <button className='btn-createAccount' onClick={()=>{navigate('/sign-up')}}>
                            Create Account
                        </button>
                        <button className='btn-login' onClick={()=>{navigate('/sign-in')}}>
                            Already Registered? Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;