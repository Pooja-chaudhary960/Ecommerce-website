import React, { useState } from 'react';
import "../CSS/LoginSignup.css";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>
        <div className='loginsignup-fields'>
          {!isLogin && <input type='text' placeholder='Your Name' required />}
          <input type='email' placeholder='Email Address' required />
          <input type='password' placeholder='Password' required/>
          <button>{isLogin ? "Login" : "Continue"}</button>
        </div>

        <p className="loginsignup-login">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span onClick={() => setIsLogin(!isLogin)} style={{cursor: 'pointer', color: 'blue'}}>
            {isLogin ? "Sign Up here" : "Login here"}
          </span>
        </p>

        {!isLogin && (
          <div className='loginsignup-agree'>
            <input type='checkbox' />
            <p>By continuing, I agree to the terms of use & privacy policy.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
