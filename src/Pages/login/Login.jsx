import { useContext } from "react";
import { Link} from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";

function Login() {
  const {login} = useContext(AuthContext);
 
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
            />
            <input
              type="password"
              placeholder="Password"
            />
            <button onClick={login}>Login</button>

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