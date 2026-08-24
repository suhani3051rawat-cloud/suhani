import React from 'react'
import website_Logo      from '../assets/logo.svg';
import '../components/userRegister.css';
import { useState } from 'react';
import  {validateForm} from '../utils/validation.js';
import { useSelector,useDispatch } from 'react-redux';
import { userRegister } from '../store/RegisterUserSlice.js';

function UserRegister() {
    let dispatch = useDispatch();
   const { loading, message, error } = useSelector(
    (state) => state.userRegister);
    console.log(error);
    console.log(message);
   let [formData , setFormData] = useState({
                                  name :"",
                                  email :"",
                                  password :"",
                                  phone_number :"", 
  });
 console.log(formData);
  let fromSubmit = async (e)=>{
    e.preventDefault(); 
     const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
        return;
    }
     dispatch(userRegister(formData));
     alert("form submitted successfully");
    }
  let DataChange = (e)=>{
     setFormData({...formData,[e.target.name] : e.target.value});
  }
  return (
   <>
   <div className='main-container'>
        <div className='userRegisterForm'>
            <img src={website_Logo} />
            <h3>farmEra</h3>
            <p className='title'>join farm era for fresh grocery at your Door step</p>
            <form onSubmit={fromSubmit}>
              <div className="field">
              <label className="label">Full name</label>
              <input className="input" type="text" name="name" value={formData.name} placeholder="Your name" onChange={DataChange} required/>
              { error.name && <p className="error">{ error.name}</p>}
            </div>

            <div className="field">
              <label className="label">Email</label>
              <input className="input" type="email" name="email" value={formData.email} placeholder="name@example.com" onChange={DataChange} required />
              { error.email && <p className="error">{ error.email}</p>}            
            </div>

            <div className="field">
              <label className="label">Password</label>
              <input className="input" type="password" name="password" value={formData.password} placeholder="At least 6 characters"  onChange={DataChange} required/>
              { error.name && <p className="error">{ error.password}</p>}           
            </div>

            <div className="field">
              <label className="label">Phone number</label>
              <input className="input" type="tel" name="phone_number" value={formData.phone_number} placeholder="10-digit mobile number" maxLength={10} onChange={DataChange} required />
               { error.name && <p className="error">{ error.phone_number}</p>}
            </div>

               <button type="submit" className="button">Register</button>
               <p className="footerText">
                Already have an account? <span className="link">Log in</span>
              </p>
            </form>
        </div>
   </div>
   </>
  )
}

export default UserRegister