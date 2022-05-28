import React, { Component } from "react";
import NewProject from "../../components/FormNewProject/index";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="grid grid-cols-3">
        <div className="col-start-2 py-10">
          <NewProject />
        </div>
      </div>
    );
  }
}
