import React, { Component } from "react";
import { connect } from "dva";
import { Button, DatePicker } from "antd";
import TestButton from "./ui-components/TestButton";

class App extends Component {
  render() {
    return (
      <div>
        <DatePicker />
        <Button type="primary">Primary</Button>
        <div>
          <TestButton />
          <TestButton primary />
          <TestButton danger />
        </div>
      </div>
    );
  }
}

export default App;
