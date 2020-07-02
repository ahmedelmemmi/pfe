import React, { Component } from "react";

import "../../src/styles/components/Home/_Dialog.scss";

class Dialog2 extends Component {
  render() {
    let dialog = (
      <div className="dialogStyles">
        <img
          className="dialogOkayButtonStyles"
          onClick={this.props.onClose}
          src={require("../../src/logos/tick.png")}
          alt=""
        />

        <div>{this.props.children}</div>
      </div>
    );

    if (!this.props.isOpen) {
      dialog = null;
    }
    return <div>{dialog}</div>;
  }
}

export default Dialog2;
