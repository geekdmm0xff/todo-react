import React from "react";
import styled from "styled-components";

export default styled.button`
  width: 80px;
  height: 20px;
  margin-right: 5px;
  /* background: ${props => (props.primary ? "skyblue" : "red")}; */
  background: ${props => {
    if (props.primary) {
      return "skyblue";
    } else if (props.danger) {
      return "red";
    } else {
      return "orange";
    }
  }}
`;
