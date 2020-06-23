import React, { Component } from "react";
import "./LoginForm.css";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: "",
      last: "",
      email: "",
      password: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [ event.target.name ]: event.target.value });
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
              First Name:
              <input
                type="text"
                name="first"
                value={this.state.first}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Last Name:
              <input
                type="text"
                name="last"
                value={this.state.last}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Email:
              <input
                type="text"
                name="email"
                value={this.state.email}
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
