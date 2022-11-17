import './register.scss'

function Register() {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>NURSAL SOCIAL.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Do you have an account?</span>
            <button>Login</button>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input
              type="text"
              placeholder="Username"
              name="username"
              
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              
            />
            <input
              type="text"
              placeholder="Name"
              name="name"
             
            />
            
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register