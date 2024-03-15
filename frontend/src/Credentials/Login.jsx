import React, { useEffect, useState } from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./Auth";
export const Login = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [list, setList] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8001/users").then((req) => setList(req.data));
  });
  let validate = list.some((u) => u.username === user && u.password === pass);

  const handleSubmit = () => {
    if (validate) {
      auth.login(user);
      navigate("/");
    } else {
      alert("Enter Valid Username and Password");
    }
  };
  const navigate = useNavigate();
  const auth = useAuth();

  return (
    <div className="box-con">
      <form action="#" className="form-con" onSubmit={handleSubmit}>
        <h1 className="form-title-con">Login Form</h1>
        <div className="firstbtn-con"></div>
        <div class="form-group-con">
          <input
            type="text"
            className="form-control-con"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder="Username"
            required
          />
        </div>
        <div class="form-group-con">
          <input
            type="password"
            className="form-control-con"
            placeholder="Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            required
          />
        </div>
        <div class="bottom-box-con">
          <a href="#" className="contain">
            Forgotpassword
          </a>
          <button className="button-30" role="button">
            Login
          </button>
          <br />
        </div>
        <br />
        <div className="container">
          <p>
            Don't have an Account ? <a href="/signup">Sign up</a>
          </p>
        </div>
      </form>
    </div>
  );
};
