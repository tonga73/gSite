import React, { Component } from "react";
import FormUserRegister from "../../components/FormUserRegister/index";

export default class Register extends Component {
  render() {
    return (
      <div className="grid grid-cols-3 min-h-screen">
        <div className="col-start-2 row-span-5 self-center">
          <div className="py-5 dark:text-gray-300 text-3xl text-center">
            Crear Cuenta
          </div>
          <FormUserRegister />
        </div>
      </div>
    );
  }
}
