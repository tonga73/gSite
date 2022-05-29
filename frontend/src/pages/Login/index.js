import React, { Component } from "react";
import FormUserAuthenticate from "../../components/FormUserAuthenticate/index";

export default class Login extends Component {
  render() {
    return (
      <div className="grid grid-cols-3 min-h-screen">
        <div className="col-start-2 row-span-5 self-center">
          <div className="py-5 dark:text-gray-300 text-3xl text-center">
            Iniciar Sesión
          </div>
          <FormUserAuthenticate />
        </div>
      </div>
    );
  }
}
