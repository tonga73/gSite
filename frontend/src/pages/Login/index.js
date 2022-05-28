import React, { Component } from "react";
import FormAuthenticate from "../../components/FormAuthenticate/index";

export default class Login extends Component {
  render() {
    return (
      <div className="grid grid-cols-3 min-h-screen">
        <div className="col-start-2 row-span-5 py-10 self-center">
          <FormAuthenticate />
        </div>
      </div>
    );
  }
}
