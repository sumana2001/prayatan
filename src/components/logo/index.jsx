import React from "react";
import styled from "styled-components";

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoText = styled.h1`
  color: #fff;
`;

export function Logo(props) {
  return (
    <LogoWrapper>
      <a href="/" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
        <LogoText>
          Prayatan<span style={{ color: "#fdd831" }}>.</span>
        </LogoText>
      </a>
    </LogoWrapper>
  );
}
