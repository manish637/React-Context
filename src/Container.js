import React from "react";
import GAProvider from "./GAProvider";
import App from "./App";

class Container extends React.Component {
  render() {
    return (
      <GAProvider>
        <App />
      </GAProvider>
    );
  }
}

export default Container;
