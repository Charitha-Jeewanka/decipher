import React, { Component } from "react";
import "../styles/login.css";
// import { tokenBreak } from "../authentications/tokenbreak";
import axios from "axios";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.changeHandler = this.changeHandler.bind(this);
    this.state = {
      emailName: "",
      passName: "",
      tokenState: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  // submitHandler = (e) => {
  //   e.preventDefault();
  //   console.log(this.state);
  //   axios
  //     .post("https://ecoerest.com", this.state)
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  getData() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        // handle success
        console.log(response);
        this.setState(
          {
            tokenState: response,
          },
          () => {
            console.log(this.state.tokenState);
          }
        );
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }

  postData() {
    const data = {
      username: "Hashika",
      password: "Hashi",
      role: "User",
    };
    axios
      .post("https://ecoerest.com/api/login", data)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { emailName, passName } = this.state;
    return (
      <>
        <article>
          <h2>Login</h2>
          <div className="login-form">
            <div className="form-control">
              <label>Email </label>
              <input
                type="email"
                id="emailId"
                placeholder="Enter Email"
                name="emailName"
                value={emailName}
                onChange={this.changeHandler}
              />
            </div>
            <div className="form-control">
              <label>Password </label>
              <input
                type="password"
                id="passId"
                placeholder="Enter Password"
                name="passName"
                value={passName}
                onChange={this.changeHandler}
              />
            </div>
            <button className="btn" onClick={this.postData}>
              Login
            </button>
            <button onClick={this.getData} className="btn">
              sign up
            </button>
          </div>
        </article>
      </>
    );
  }
}

export default PostForm;
