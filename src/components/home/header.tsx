import React from "react";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import Image, { FixedObject, FluidObject } from "gatsby-image";
import { ProfilObject } from "../../shared/interface";

/**
 * Styled Component
 */

const borderStyle = "1px solid rgba(255, 255, 255, 0.5)";

const HeaderContainer = styled.header`
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 75px 150px 75px 95px;

  &:before {
    border-top: ${borderStyle};
    content: "";
    display: block;
    height: 1px;
    margin-top: 95px;
    position: absolute;
    width: 100%;
    max-width: 1105px;
  }
`;

/* Identity */
const Identity = styled.div`
  border: ${borderStyle};
  height: 275px;
  min-width: 275px;
  padding: 30px 0;
  text-align: center;
`;

/** Typescript error :  No overload matches this call. I don't use for the moment */
// const IdentityImage: StyledComponent<typeof Image, any, {}, never> = styled(Image)``;
const styleIdentityImage = {
  borderRadius: "100%",
};

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
  margin-top: 10px;
`;

/* Information */
const Information = styled.div`
  font-size: 14px;
  line-height: 28px;
  max-width: 610px;
`;

const Description = styled.p``;

const Katakana = styled.p`
  font-size: 16px;
  line-height: 18.75px;
  margin: 30px 0 10px;
`;

const InformationTable = styled.table`
  th {
    text-align: left;
    width: 170px;
  }
`;

/**
 * Props Interface
 */

interface HeaderProps {
  backgroundImg: FluidObject;
  identityImg: FixedObject;
  profil: ProfilObject;
}

/**
 * Template
 */

export default class Header extends React.Component<HeaderProps> {
  render() {
    const { backgroundImg, identityImg, profil } = this.props;

    return (
      <BackgroundImage fluid={backgroundImg}>
        <div>
          <HeaderContainer>
            <Identity>
              <Image style={styleIdentityImage} fixed={identityImg}></Image>
              <Name>
                {profil.firstName} <span>{profil.lastName}</span>
              </Name>
              <Job>{profil.job}</Job>
            </Identity>
            <Information>
              <Description>{profil.description}</Description>
              <Katakana>{profil.katakana}</Katakana>
              <InformationTable>
                <tbody>
                  <tr>
                    <th scope="row">性別</th>
                    <td>{profil.sexe}</td>
                  </tr>
                  <tr>
                    <th scope="row">生年月日</th>
                    <td>{profil.birthday}</td>
                  </tr>
                  <tr>
                    <th scope="row">現住所</th>
                    <td>{profil.adress}</td>
                  </tr>
                </tbody>
              </InformationTable>
            </Information>
          </HeaderContainer>
        </div>
      </BackgroundImage>
    );
  }
}
