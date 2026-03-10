import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './SignUp.css'

const SignUp = () => {
    const navigate = useNavigate();
    const[ formData, setFormData] = useState({
        fullName: 'Marry Doe',
        phoneNumber: 'Marry Doe',
        email: 'Marry Doe',
        password: 'Marry Doe',
        companyName: 'Marry Doe',
        isAgency: 'yes'
    })
    const handleChange = (e) => {
        const {name,value}=e.target;
            setFormData({
                ...formData,
                [name]:value
            })
        }
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/account');
    }
    
  return (
    <div className='signUp-container'>
      <h1>Create Your <br/> PopX account</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
            <legend> Full Name*</legend>
            <input 
            type="text"
            placeholder='Marry Doe'
            value={formData.fullName}
            onChange={handleChange}
            
            />
        </fieldset>
        <fieldset>
            <legend>Phone Number*</legend>
            <input 
            type="tel"
            placeholder='Marry Doe'
            value={formData.phoneNumber}
            onChange={handleChange}
            
            />
        </fieldset>
        <fieldset>
            <legend>Email address*</legend>
            <input 
            type="text"
            placeholder='Marry Doe'
            value={formData.email}
            onChange={handleChange}
            
            />
        </fieldset>
        <fieldset>
            <legend>Password*</legend>
            <input 
            type="text"
            placeholder='Marry Doe'
            value={formData.password}
            onChange={handleChange}
            
            />
        </fieldset>
        <fieldset>
            <legend>Company name*</legend>
            <input 
            type="text"
            placeholder='Marry Doe'
            value={formData.companyName}
            onChange={handleChange}
            
            />
        </fieldset>
        <div className="signup-form-group">
            <label className="signup-label">Are you an Agency?*</label>
            <div className="signup-radio-group">
                <label className="signup-radio-label">
                    <input 
                    type="radio"
                    name='isAgency'
                    value='yes'
                    checked={formData.isAgency==='yes'}
                    onChange={handleChange}
                    />
                    Yes
                </label>
                <label className="signup-radio-label">
                <input
                    type="radio"
                    name="isAgency"
                    value="no"
                    checked={formData.isAgency === 'no'}
                    onChange={handleChange}
                />
                No
                </label>
            </div>
        </div>
        <button type="submit" className='btn-signup'>
            Create Account
        </button>
      </form>
    </div>
  )
}

export default SignUp
