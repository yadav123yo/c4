import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";

function Login() {
  const [formState, setformState] = useState({ email: "", password: "" });
  const [state, dispatch] = useContext(AppContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformState({ ...formState, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formState)
      });
      res = await res.json();
      // update auth
      console.log(res);
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          token: res.token
        }
      });
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Email
            <input
              
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="email"
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
          
              type="password"
              placeholder="password"
              name="password"
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <input  type="submit" value="SUBMIT" />
        </div>
      </form>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
export default Login;
