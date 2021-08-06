import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import "./App.css";

import { createInstance, OptimizelyProvider } from "@optimizely/react-sdk";

const optimizely = createInstance({
  sdkKey: "WRR6Cc9TZa9YRLMnzDhM7M",
});

export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };

  render() {
    return (
      <OptimizelyProvider
        optimizely={optimizely}
        user={{
          id: "user123",
        }}
      >
        <div className="component-app">
          <Display value={this.state.next || this.state.total || "0"} />
          <ButtonPanel clickHandler={this.handleClick} />
        </div>
      </OptimizelyProvider>
    );
  }
}
