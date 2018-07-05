import React from "react";
import { MyContext } from "./GAProvider";

export const withGA = eventName => Component => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.registerEvent = this.registerEvent.bind(this);
    }

    registerEvent = context => {
      context.ga.push(eventName);
    };

    render() {
      return (
        <MyContext.Consumer>
          {context => (
            <Component context={context} registerEvent={this.registerEvent} />
          )}
        </MyContext.Consumer>
      );
    }
  };
};
