import React from "react";
import { withGA } from "./HOC";

const _Button = ({ context, registerEvent }) => {
  return (
    <button
      onClick={() => {
        registerEvent(context);
      }}
    >
      {context.state.count}
    </button>
  );
};

export const Button = withGA("clicked")(_Button);
