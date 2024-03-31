

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost/backend/api/signup.php", values);
      console.log(values);

      console.log(response);
      if (response.status === 201) {
        navigate("/");
      } else {
        throw new Error("Signup failed!");
      }
    } catch (error) {
      console.log("error.message");
    }
  };

  return (
    <div className="signup">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="inputBox"
          type="text"
          placeholder="Enter Name"
          name="name"
          value={values.name}
          onChange={handleInputChange}
        />
        <input
          className="inputBox"
          type="email"
          placeholder="Enter Email"
          name="email"
          value={values.email}
          onChange={handleInputChange}
        />
        <input
          className="inputBox"
          type="password"
          placeholder="Enter Password"
          name="password"
          value={values.password}
          onChange={handleInputChange}
        />
        <button className="appButton" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;




/*import React,{useState} from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function SignUp(){
    const [values, setValues] = useState({
        id:'',
        name: '',
        email: '',
        password: ''
    })
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
      setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))

    }
    const handleSubmit = (event) => {
      event.preventDefault();
      setErrors(Validation(values));
      if(errors.name === "" && errors.email === "" && errors.password === ""){
        axios.post('http://localhost:8081/signup', values)
        .then(res =>{
          navigate('/');

        })
        .catch(err => console.log(err));
      }
      

    }
        
    

    return(
        <div onSubmit={handleSubmit} className="signup">
            <h1>Sign Up</h1>
            <input className="inputBox" type="text" placeholder="Enter Name"
            name='name' onChange={handleChange}/>

            <input className="inputBox" type="text" placeholder="Enter Email"
            name='email' onChange={handleChange}/>
            <input className="inputBox" type="password" placeholder="Enter Password"
            name='password' onChange={handleChange}/>

            <button className="appButton" type="submit">Sign Up</button>


            
        </div>
    )
    }
export default SignUp;
*/







/*import { useState } from "react";
import axios from 'axios';
export default function SignUp() {
  const [inputs, setInputs] = useState({ name: "", email: "", password: "" });


  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
  
    switch (name) {
      case "name":
        setInputs(values => ({ ...values, name: value }));
        break;
      case "email":
        setInputs(values => ({ ...values, email: value }));
        break;
      case "password":
        setInputs(values => ({ ...values, password: value }));
        break;
      default:
        // Log unexpected values for debugging purposes
        console.log(`Unhandled input name: ${name}`);
        // Optionally, you can throw an error
        // throw new Error(`Unhandled input name: ${name}`);
        break;
    }
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:8888/api/user/signup',inputs);
    console.log(inputs);
  };

  return (
    <div className="signup">
      <h1 className="titre">SignUp</h1>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <th>
                <label>Name:</label>
              </th>
              <td>
                <input className="inputBox" type="text" name="name" onChange={handleChange}/>
              </td>
            </tr>
            <tr>
              <th>
                <label>Email:</label>
              </th>
              <td>
                <input className="inputBox" type="text" name="email" onChange={handleChange}/>
              </td>
            </tr>
            <tr>
              <th>
                <label>Password:</label>
              </th>
              <td>
                <input className="inputBox" type="password" name="password" onChange={handleChange}/>
              </td>
            </tr>
            <tr>
              <td>
                <button className="appButton">signup</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}
*/





/*import React,{useState} from "react";
import axios from 'axios';

function SignUp(){
    const [values, setValues] = useState({
        id:'',
        name: '',
        email: '',
        password: ''
    })
    const handleChange = (event)=> {
        setValues({...values, [event.target.name]:[event.target.value]})
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/signup', values)
        .then(res => console.log("Registered Successfully!!"))
        .catch(err => console.log(err));
    }

    return(
        <div onSubmit={handleSubmit} className="signup">
            <h1>Sign Up</h1>
            <input className="inputBox" type="text" placeholder="Enter Name"
            name='name' onChange={handleChange}/>

            <input className="inputBox" type="text" placeholder="Enter Email"
            name='email' onChange={handleChange}/>
            <input className="inputBox" type="password" placeholder="Enter Password"
            name='password' onChange={handleChange}/>

            <button className="appButton" type="submit">Sign Up</button>


            
        </div>
    )
}
export default SignUp;*/




