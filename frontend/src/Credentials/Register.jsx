import React, { useState } from "react";
import "./login1.css";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
export const Register = () => {
  const [user, setUser] = useState();
  const [pass, setPass] = useState();
  const [email, setEmail] = useState();
  let handleSignup = () => {
    axios
      .post("http://localhost:8001/users", {
        username: user,
        password: pass,
        email: email,
      })
      .then(() => {
        toast("Registered Successfully", { containerId: "C" });
      });
  };

  return (
    <div className="sign-cont">
      <form action="#" className="form-si" onSubmit={handleSignup}>
        <h1 className="form-title-si">Sign up Form</h1>
        <div className="firstbtn-si"></div>
        <div className="form-group-si">
          <input
            type="text"
            className="form-control-si"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group-si">
          <input
            type="text"
            class="form-control-si"
            placeholder="Username"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            required
          />
        </div>
        <div class="form-group-si">
          <input
            type="password"
            className="form-control-si"
            placeholder="Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            required
          />
        </div>
        <br />
        <div className="bottom-box-si">
          <br />
          <br />
          <br />
          <a href="#" className="contain-si">
            Forgotpassword{" "}
          </a>
          <br />
          <button className="button-30-si" type="submit" role="button">
            Signup
          </button>
        </div>
        <br />
        <div class="container-si">
          <p>
            Already have an Account <a href="/login">Login</a>
          </p>
        </div>
      </form>
    </div>
  );
};
