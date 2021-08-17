import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import {
  FooterContainer,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./footerElement";

function Footer() {
  return (
    <FooterContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <WebsiteRights>
            Prayatan © {new Date().getFullYear()} All rights reserved.
          </WebsiteRights>
          <SocialIcons>
            <SocialIconLink
              href="https://www.facebook.com"
              rel="noopener"
              target="_blank"
              aria-label="Facebook">
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink
              href="https://www.instagram.com"
              rel="noopener"
              target="_blank"
              aria-label="Instagram">
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href="https://twitter.com"
              rel="noopener"
              target="_blank"
              aria-label="Twitter">
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink
              href="https://www.linkedin.com"
              rel="noopener"
              target="_blank"
              aria-label="LinkedIn">
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;
