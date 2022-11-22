import { useContext, useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";

function Login() {
  const {login} = useContext(AuthContext);
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setErr] = useState(null);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/")
    } catch (err) {
      setErr(err.response.data);
    }
  };
 
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>NURSAL SOCIAL</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input
              type="text"
              placeholder="Username"
              name="username" 
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password" 
              onChange={handleChange}
            />
            {err && err}
            <button onClick={handleLogin}>Login</button>

            <div className="not_register">
            <span>Don't you have an account?</span> 
            <Link to="/register" style={{textDecoration: "none"}}>
              Register Here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  ); 
}

export default Login