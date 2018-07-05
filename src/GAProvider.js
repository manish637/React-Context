import React, { Component } from "react";

export const MyContext = React.createContext();

class GAProvider extends Component {
  constructor() {
    super();
    this.state = {
      arr: [],
      count: 0
    };
  }
  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          ga: {
            push: eventName => {
              this.setState(prevState => ({
                arr: prevState.arr.concat(eventName),
                count: this.state.count + 1
              }));
              console.log(this.state.count);
              console.log(this.state.arr);
            }
          }
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default GAProvider;
