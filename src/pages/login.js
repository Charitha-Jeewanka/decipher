import React, { Component, useState } from "react";
import "../styles/login.css";
import { tokenBreak } from "../authentications/tokenbreak";
import axios from "axios";

const clickHandler = () => {
  tokenBreak(1);
};

// const clickSender = () => {
//   axios
//     .post("https://ecoerest.com/", {
//       email: "setemailName",
//       password: "setpassWord",
//     })
//     .then(function (response) {
//       console.log(response);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// };

// const Login = () => {
//   const [emailName, setemailName] = useState("");
//   const [passWord, setpassWord] = useState("");
//   changeHandler = e => {
//       this.setState({[e.target.name]: e.target.value})
//   }
//   return (
//     <>
//       <article>
//         <h2>Login</h2>
//         <div className="login-form">
//           <div className="form-control">
//             <label>Email </label>
//             <input
//               type="email"
//               id="emailId"
//               placeholder="Enter Email"
//               name="emailName"
//               value={emailName}
//               onChange={(e) => setemailName(e.target.value)}
//             />
//           </div>
//           <div className="form-control">
//             <label>Password </label>
//             <input
//               type="password"
//               id="passId"
//               placeholder="Enter Password"
//               name="passName"
//               value={passWord}
//               onChange={(e) => setpassWord(e.target.value)}
//             />
//           </div>
//           <button onClick={clickSender} className="btn">
//             Login
//           </button>
//           <button onClick={clickHandler} className="btn">
//             Register
//           </button>
//         </div>
//       </article>
//     </>
//   );
// };

// export default Login;

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailName: "",
      passName: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("https://ecoerest.com", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
            <button className="btn" onClick={this.submitHandler}>
              Login
            </button>
            <button onClick={clickHandler} className="btn">
              Register
            </button>
          </div>
        </article>
      </>
    );
  }
}

export default PostForm;
