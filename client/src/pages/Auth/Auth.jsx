import React, { useState } from 'react'

import './Auth.css'
import icon from '../../assets/icon.png'
import AboutAuth from './AboutAuth'


const Auth = () => {

  const [isSignup, setIsSignup] = useState(false)

  const handleSwitch = () => {
    setIsSignup(!isSignup)
  }

  return (
    <section class='auth-section'>
       { isSignup && <AboutAuth />}
       <div class='auth-container-2'>
         { !isSignup && <img src={icon} alt='stack overflow' className='login-logo' />}
        
        <form>
            {

              isSignup && (
                 <label htmlFor='name'>
                   <h4 style={{display:"flex"}}>Display Name</h4>
                   <input type="text" id="name" name="name"/>
                 </label>
              )
            }

          <label htmlFor="">
              <h4 style={{display: "flex"}}>Email</h4>
              <input type="email" name='email' id='email' />
          </label>

          <label htmlFor="">
             <div style={{display:"flex", justifyContent:"space-between"}}>
                 <h4>Password</h4>
                 { !isSignup && <h4 style={{color: "#007ac6", fontSize: "13px"}}>forgot password ?</h4>}
             </div>
             <input type="password" name='password' id='password' />
             { isSignup && <p style={{color: "#666767", fontSize:"13px"}}>Password must contain atleast eight  characters  <br />including atleast 1 letter &  1 number</p>}

          </label>

          {
            isSignup && (
              <label htmlFor="check">
                  <input type="checkbox" id="check" />
                  <p style={{  fontSize:"13px"}}> Opt-in recieve occasional product updates, user research invitations, company accouncements and digests. </p>

              </label>
            )
          }

          <button type='submit' className='auth-btn'>{ isSignup ? 'Sign up' : 'Log in'}</button>
          {
            isSignup && (
              <p style={{color: "#666767", fontSize:"13px"}}>
                By clicking "Sign up", you agree to our 
                 <span style={{color: "#007ac6"}}> terms of <br /> service</span>,
                 <span style={{color: "#007ac6"}}>privacy policy</span> and 
                 <span style={{color: "#007ac6"}}>cookie policy</span>
                
              </p>
            )
          }
       
        </form>

        <p> 
         { isSignup ? 'Already have an account' : "Dont have an account"}
        <button type='button' className="handle-switch-btn" onClick={handleSwitch}>{ isSignup ? 'Log in' : 'Sign up'}</button>
        
        </p>


       </div>

     
     
     
    </section>
  )
}

export default Auth