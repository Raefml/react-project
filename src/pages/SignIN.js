import React, { useState } from "react";
import axios from "axios";

function SignIn() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost/backend/api/signin.php", values);
      console.log(response);
      if (response.status === 200) {
        setLoginSuccess(true);
        setLoginError(false);
        setTimeout(() => {
          setLoginSuccess(false);
        }, 3000);
      } else {
        setLoginError(true);
        setLoginSuccess(false);
      }
    } catch (error) {
      console.log(error);
      setLoginError(true);
      setLoginSuccess(false);
    }
  };

  return (
    <div className="signin">
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
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
          Sign In
        </button>
      </form>
      {loginSuccess && (
        <div className="successPopup">
          <p>Login successful!</p>
        </div>
      )}
      {loginError && (
        <div className="errorPopup">
          <p>Failed to login. Please check your credentials and try again.</p>
        </div>
      )}
    </div>
  );
}

export default SignIn;
