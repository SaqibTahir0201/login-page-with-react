//@ create new account
import React, { useState } from "react";
import "daisyui/dist/full.css";
import { useNavigate } from "react-router-dom";
import img from "../public/google_logo.png";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your authentication logic here
    if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      // Create a new user account
      console.log("Creating new user account...");
      // You can use a library like Firebase or a backend API to create a new user account
      navigate("/SignIn", { replace: true }); // Navigate to login page
    }
  };

  const handleGoogleLogin = () => {
    // Add your Google authentication logic here
    console.log("Google login button clicked");
    // You can use a library like react-google-login to handle Google authentication
    // For example:
    // import { GoogleLogin } from 'react-google-login';
    // const responseGoogle = (response) => {
    //   console.log(response);
    //   // Handle the Google login response
    // };
    // <GoogleLogin
    //   clientId="YOUR_GOOGLE_CLIENT_ID"
    //   buttonText="Login with Google"
    //   onSuccess={responseGoogle}
    //   onFailure={responseGoogle}
    //   cookiePolicy={'single_host_origin'}
    // />;
  };

  return (
    <div className="container border rounded-lg m-auto w-full sm:w-2/5 p-4 py-6 sm:md:p-6 sm:lg:p-12">
      <form onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <div className="form-control mb-4">
          <label className="label" htmlFor="username">
            Username
          </label>
          <input
            className="input input-bordered w-full"
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Enter your username"
          />
        </div>
        <div className="form-control mb-4">
          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            className="input input-bordered w-full"
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <div className="form-control mb-4">
          <label className="label" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            className="input input-bordered w-full"
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            placeholder="Confirm your password"
          />
        </div>
        <div className="form-control mb-4">
          <input
            className="checkbox"
            type="checkbox"
            checked={rememberMe}
            onChange={(event) => setRememberMe(event.target.checked)}
          />
          <label className="label">Remember me</label>
        </div>
        {error && <div className="text-red-500">{error}</div>}
        <button className="btn btn-primary w-full" type="submit">
          Sign Up
        </button>
        <button
          className="btn btn-google w-full mt-4"
          onClick={handleGoogleLogin}
        >
          <img src={img} alt="Google Logo" className="w-6 h-6 mr-2" />
          Login with Google
        </button>
      </form>
    </div>
  );
}

export default SignUp;
