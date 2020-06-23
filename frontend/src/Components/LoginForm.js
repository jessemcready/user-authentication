import React, { Component } from "react";
import "./LoginForm.css";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Username:
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <input type="submit" value="Log In" />
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
