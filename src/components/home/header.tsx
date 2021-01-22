import React, { Component } from "react";
import styled, { StyledComponent } from "styled-components";
import BackgroundImage from "gatsby-background-image";
import Image, {
  FixedObject,
  FluidObject,
  GatsbyImageProps,
} from "gatsby-image";

/**
 * Styled Component
 */

const borderStyle = "1px solid rgba(255, 255, 255, 0.5)";

const HeaderContainer = styled(BackgroundImage)`
  background-position: 50% 85%;
  background-repeat: none;
  padding: 75px 150px 75px 95px;
  height: 430px; // tmp
`;

const Identity = styled.div`
  border: ${borderStyle};
  height: 275px;
  width: 275px;
`;

/** Typescript error :  No overload matches this call. I don't use for the moment */
// const IdentityImage: StyledComponent<typeof Image, any, {}, never> = styled(Image)``;
const styleIdentityImage = {
  borderRadius: "100%",
};

/**
 * Props Interface
 */

interface HeaderProps {
  backgroundImg: FluidObject;
  identityImg: FixedObject;
  identity: {
    job: string;
    name: string;
  };
}

/**
 * Template
 */

export default class Header extends Component<HeaderProps> {
  render() {
    const { backgroundImg, identityImg, identity } = this.props;

    return (
      <HeaderContainer Tag={"header"} fluid={backgroundImg}>
        <Identity>
          <Image style={styleIdentityImage} fixed={identityImg}></Image>
        </Identity>
        {identity.name}
        {identity.job}
      </HeaderContainer>
    );
  }
}
