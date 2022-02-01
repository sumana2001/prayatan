import React from "react";
import styled from "styled-components";

const LogoWrapper = styled.div`
  display: float;
  align-items: center;
`;

const LogoText = styled.h1`
  color: #fff;
  float:right;
  @media screen and (max-width: 768px) {
    font-size:1.5rem;
  }
`;

const Image = styled.img`
max-height:40px;
float:left;
@media screen and (max-width: 768px) {
  
}
`

export function Logo(props) {
  return (
    <LogoWrapper>
      <a href="/" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
      <LogoText>
      <Image src="https://res.cloudinary.com/dqlh4eyt8/image/upload/v1643698497/logo-modified_yuaqs7.png" alt="Prayatan Logo" />
        
          &nbsp;Prayatan-Ek Awaaz
        </LogoText>
      </a>
    </LogoWrapper>
  );
}
