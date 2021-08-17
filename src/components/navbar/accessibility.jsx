import React from "react";
import styled from "styled-components";

const AccessibilityContainer = styled.div`
  display: flex;
  margin-left: 10px;
`;

const Button = styled.a`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  border-radius: 20px;
  background-color: transparent;
  border: 2px solid #fdd831;
  transition: all 240ms ease-in-out;
  cursor: pointer;
  text-decoration:none;

  &:hover {
    color: #000;
    background-color: #fdd831;
  }

  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;

class Accessibility extends React.Component {
  render() {
    return (
      <div className="Accessibility">
        <AccessibilityContainer>
          <Button
            className="btn"
            style={{ cursor: "pointer" }}
            href="#donate">
            Donate
          </Button>
        </AccessibilityContainer>
      </div>
    );
  }
}

export default Accessibility;
