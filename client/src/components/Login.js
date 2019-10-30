<<<<<<< HEAD
import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div>
        <form className="formm">
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
            />
          </div>
          <div className="form-group form-check">
            {/* <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            /> */}
            {/* <label className="form-check-label" for="exampleCheck1">
              Check me out
            </label> */}
          </div>
          <button type="submit" onClick="login();" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
=======
import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div>
        <form className="formm">
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div className="form-group form-check">
            {/* <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            /> */}
            {/* <label className="form-check-label" for="exampleCheck1">
              Check me out
            </label> */}
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
>>>>>>> f83ad308d0a74d7932b349dac358d51804fb37ed
