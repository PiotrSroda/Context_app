import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Field extends React.Component {
  renderInput(value) {
    switch (value) {
      case "dutch":
        return "Naam";
      case "polish":
        return "Nazwa";
      default:
        return "Name";
    }
  }
  render() {
    return (
      <div className="ui field">
        <label>
          <LanguageContext.Consumer>
            {value => this.renderInput(value)}
          </LanguageContext.Consumer>
        </label>
        <input />
      </div>
    );
  }
}

export default Field;
