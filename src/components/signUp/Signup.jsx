import React, { useContext, useState } from "react";
import "./signUp.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./signUp.css";
import { AuthContext } from "../providers/AuthProvider";

const Signup = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { createUser } = useContext(AuthContext);

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(name);

    setError("");

    if (password !== confirm) {
      setError("Password did not match!");
      return;
    } else if (password.length < 6) {
      setError("Password must be 6 character!");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <div className="form-container pb-10">
      <h2 className="form-title">Sign Up </h2>

      <form onSubmit={handleSignUp}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>

        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="emnail" id="email" required />
        </div>

        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" required />
        </div>
        
        <div className="form-control">
          <label htmlFor="confirm">Confirm Password</label>
          <input type="password" name="Confirm" id="confirm" required />
        </div>

        <input type="file" name="file" required />

        <input
          className="btn-submit btn-primary"
          type="submit"
          value="Sign Up"
        />
      </form>
      <p>
        <small>
          Already have an account?{" "}
          <Link to="/login" className="text-blue-700 underline">
            Log In
          </Link>
        </small>
      </p>
      <p className="text-error">{error}</p>
    </div>
  );
};

export default Signup;
