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
  box-sizing: border-box;
  color: #fff;
  height: 430px; // tmp
  padding: 75px 150px 75px 95px;
`;

const Identity = styled.div`
  border: ${borderStyle};
  box-sizing: border-box;
  height: 275px;
  padding: 30px 0;
  text-align: center;
  width: 275px;
`;

const Name = styled.h1`
  font-size: 24px;
  font-weight: normal;

  > span {
    text-transform: uppercase;
  }
`;

const Job = styled.h2`
  font-size: 14px;
  font-weight: normal;
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
    firstName: string;
    lastName: string;
    job: string;
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
          <Name>
            {identity.firstName} <span>{identity.lastName}</span>
          </Name>
          <Job>{identity.job}</Job>
        </Identity>
      </HeaderContainer>
    );
  }
}
