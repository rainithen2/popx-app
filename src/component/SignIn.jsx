import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../style/SignIn.css'

const SignIn = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/account');
  };

  return (
    <div className='signIn-container'>
      <h1 className='signIn-title'>
        Signin to your <br/> PopX account
      </h1>

      <p className='signIn-subtitle'>
        Lorem ipsum dolor sit amet,<br/>
        consectetur adipiscing elit,
      </p>

      <form onSubmit={handleSubmit}>

        <fieldset className="signIn-form-group">
          <legend className='signIn-label'>Email Address</legend>
          <input 
            type="email"
            name="email"
            className='signIn-input'
            placeholder='Enter email address'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </fieldset>

        <fieldset className="signIn-form-group">
          <legend className='signIn-label'>Password</legend>
          <input 
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </fieldset>

        <button type="submit" className='btn-signIn'>
          Login
        </button>

      </form>
    </div>
  )
}

export default SignIn;