import React from 'react'
import '../components/Register.css'

const Register = () => {
  return (
    <div>
        <form className='reg-form'>
            <input type="email" placeholder='enter email' id='email' name='email'/>
            <input type="password" placeholder='enter password' id='password' name='password'/>
        </form>
      
    </div>
  )
}

export default Register
