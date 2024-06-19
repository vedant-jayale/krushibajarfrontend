import React, { useState } from 'react'
import "./CSS/LoginSignup.css"



const LoginSignup = () => {
   const [state,setState] =useState("Login");

   const [formData,setFormData] =useState({

      username:"",
      password:"",
      email:"",

   })

   const changeHandler = (e) =>{  //ehere e means event

      setFormData({...formData,[e.target.name]:e.target.value})

   }

   const login =async ()=>{

      console.log("Login Function Executedd ",formData);
      let responsedata;
      await fetch("https://krushibajarbackend.onrender.com/login", {
          method: "POST",
          headers: {
              Accept: "application/form-data", // Potential issue here
              "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
      })
          .then((response) => response.json())
          .then((data) => responsedata = data);
  
      if (responsedata.success) {
          localStorage.setItem("auth-token", responsedata.token);
          window.location.replace("/");
      }
      else{
         alert(responsedata.error)
      }
       
      



   }

   const signup = async () => {
      console.log("Sign Up Function Executed", formData);
      let responsedata;
      await fetch("https://krushibajarbackend.onrender.com/signup", {
          method: "POST",
          headers: {
              Accept: "application/form-data", // Potential issue here
              "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
      })
          .then((response) => response.json())
          .then((data) => (responsedata = data));
  
      if (responsedata.success) {
          localStorage.setItem("auth-token", responsedata.token);
          window.location.replace("/");
      }
      else{
         alert(responsedata.error)
      }

  };

  return (
    <div className='loginsignup'>
       <div className='loginsignup-container'>
          <h1> {state}</h1>
          <div className='loginsignup-fields'>
               {state==="Sign Up"? <input name='username' value={formData.username} onChange={changeHandler} type ="text" placeholder='Your Name '/> : <></> }
               <input name='email' value={formData.email} onChange={changeHandler} type ="email" placeholder='Email Address '/>
               <input name="password" value={formData.password} onChange={changeHandler} type ="password" placeholder='Password '/>
            
          </div>
          <button onClick={()=>{state==="Login"? login():signup()}}>Continue</button> 
          {state==="Sign Up" ?  <p className='loginsignup-login'> Already Have an account ? <span onClick={()=>{setState("Login")}}>LogIn Here</span></p>
                               :<p className='loginsignup-login'> Create an account ? <span onClick={()=>{setState("Sign Up")}}>Click Here</span></p>}
         
          

          <div className='loginsignup-agree'>
             <input type ="checkbox"  name='' id=""/>
             <p> By Continuing , i agree to the terms of use and privacy policy.</p>
          </div>
       </div>
       
      
    </div>
  )
}

export default LoginSignup
