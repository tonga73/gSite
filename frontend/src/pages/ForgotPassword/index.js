import React, { Component } from "react";
import FormUserForgotPassword from "../../components/FormUserForgotPassword/index";

export default class Login extends Component {
  render() {
    return (
      <div className="grid grid-cols-3 min-h-screen">
        <div className="col-start-2 row-span-5 py-10 self-center">
          <div className="py-5 dark:text-gray-300 text-3xl text-center">
            Recuperar Password
          </div>
          <FormUserForgotPassword />
        </div>
      </div>
    );
  }
}
