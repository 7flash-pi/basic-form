import React,{ useState } from "react";
import "./index.css";

export default function App() {

  const [values,setValues]=useState({
    firstName:"",
    lastName:"",
    email:"",

  });
  const[submitted,setSubmitted]=useState(false);
  const[valid,setValid]=useState(false);

  const handleFirstNameInputChange = (event) => {
    setValues({...values,firstName:event.target.value});
  }  
  const handleLastNameInputChange = (event) => {
    setValues({...values,lastName:event.target.value});
  }   
  const handleEmailInputChange = (event) => {
    setValues({...values,email:event.target.value});
  }   
  const handleSubmit = (event) => {
    event.preventDefault();
    if(values.firstName && values.lastName && values.email )
    {
      setValid(true);
    }
      
    setSubmitted(true);
  }




  return (
    <div class="form-container">
      <p class="title-input">Basic Form</p>
      <form class="register-form" onSubmit={handleSubmit}> 
        {submitted && valid? <div className="success-message">Success!Thank You for registering</div> :null}
        <input
        onChange={handleFirstNameInputChange}
          value={values.firstName}
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name" 
          name="firstName"
        />
         {submitted && !values.firstName ? <span>Please Enter your firstname</span>:null } 
        <input
          onChange={handleLastNameInputChange}
          value={values.lastName}
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name" 
          name="lastName"
        />
        {submitted && !values.lastName ? <span>Please Enter your lastname</span>:null } 
        <input
          onChange={handleEmailInputChange}
          value={values.email}
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
       {submitted && !values.email ? <span>Please Enter your email address</span>:null } 
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}