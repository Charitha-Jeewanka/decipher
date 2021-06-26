import { Component } from "react";
import axios from "axios";

export const tokenBreak = () => {
  class Token extends Component {
    constructor(props) {
      super(props);

      this.state = {
        tokenState: "",
      };
    }

    componentDidMount() {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((data) => {
          // console.log(data);
          this.setState(
            {
              tokenState: data,
            },
            () => {
              console.log(this.state.tokenState);
            }
          );
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
};
