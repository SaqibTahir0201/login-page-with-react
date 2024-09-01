// @ already have account
import React, { useState } from "react";
import "daisyui/dist/full.css";
import { useNavigate } from "react-router-dom"; // Update this import
function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Update this line

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your authentication logic here
    if (username === "admin" && password === "password") {
      // Login successful
      console.log("Login successful");
      navigate("/Home", { replace: true }); // Navigate to /Home route
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="container border rounded-lg m-auto w-full sm:w-2/5 p-4 py-6 sm:md:p-6 sm:lg:p-12">
      <form onSubmit={handleSubmit}>
        <h2 className="text-2xl  font-bold mb-4">Sign In</h2>
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
          Sign In
        </button>
      </form>
    </div>
  );
}

export default SignIn;
