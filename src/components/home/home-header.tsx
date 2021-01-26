import React from "react";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import Image, { FixedObject, FluidObject } from "gatsby-image";
import { ProfilObject } from "../../shared/interface";
import { device } from "../../shared/style";

/**
 * Styled Component
 */

const borderStyle = "1px solid rgba(255, 255, 255, 0.5)";

const HomeHeaderContainer = styled.header`
  align-items: center;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 75px 0 75px;

  @media ${device.laptop} {
    align-items: inherit;
    flex-direction: row;
  }

  @media ${device.laptopL} {
    justify-content: space-between;
    padding-right: 150px;
    padding-left: 95px;

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
  }
`;

/* Identity */
const Identity = styled.div`
  height: 275px;
  min-width: 275px;

  text-align: center;

  @media ${device.laptop} {
    border: ${borderStyle};
    padding: 30px 0;
  }
`;

/** Typescript error :  No overload matches this call. I don't use for the moment */
// const IdentityImage: StyledComponent<typeof Image, any, {}, never> = styled(Image)``;
const styleIdentityImage = {
  borderRadius: "100%",
};

const Name = styled.h1`
  font-size: 24px;
  font-weight: normal;
  margin-top: 30px;

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
  padding: 0 10px;

  @media ${device.tablet} {
    padding: 0;
  }
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

interface HomeHeaderProps {
  backgroundImg: FluidObject;
  identityImg: FixedObject;
  profil: ProfilObject;
}

/**
 * Template
 */

export default class HomeHeader extends React.Component<HomeHeaderProps> {
  render() {
    const { backgroundImg, identityImg, profil } = this.props;

    return (
      <BackgroundImage
        fluid={backgroundImg}
        style={{ backgroundPosition: "bottom" }}
      >
        <div>
          <HomeHeaderContainer>
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
          </HomeHeaderContainer>
        </div>
      </BackgroundImage>
    );
  }
}
