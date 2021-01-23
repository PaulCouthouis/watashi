import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";

import Header from "../components/home/header";
import { FixedObject, FluidObject } from "gatsby-image";
import { ProfilObject } from "../shared/interface";
import Works from "../components/home/works";

const MainLayout = styled.div`
  font-family: "Roboto";
  max-width: 1200px;
`;

interface ChildImageSharp<T extends FluidObject | FixedObject> {
  childImageSharp: {
    img: T;
  };
}

interface Props {
  data: {
    backgroundHeaderImg: ChildImageSharp<FluidObject>;
    content: {
      profil: ProfilObject;
    };
    identityImg: ChildImageSharp<FixedObject>;
  };
}

export default ({ data }: Props) => {
  console.log(data);
  const { backgroundHeaderImg, identityImg, content } = data;

  return (
    <MainLayout>
      <Header
        backgroundImg={backgroundHeaderImg.childImageSharp.img}
        identityImg={identityImg.childImageSharp.img}
        profil={content.profil}
      ></Header>
      <Works></Works>
    </MainLayout>
  );
};

export const query = graphql`
  query {
    backgroundHeaderImg: file(relativePath: { eq: "header-background.png" }) {
      childImageSharp {
        img: fluid(quality: 100, maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    identityImg: file(relativePath: { eq: "header-identity.jpg" }) {
      childImageSharp {
        img: fixed(quality: 100, height: 128, width: 128) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    content: dataJson {
      profil {
        adress
        birthday
        description
        firstName
        job
        katakana
        lastName
        sexe
      }
    }
  }
`;
