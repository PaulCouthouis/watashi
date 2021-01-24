import { graphql } from "gatsby";
import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import Header from "../components/home/header";
import { FixedObject, FluidObject } from "gatsby-image";
import { ChildImageSharp, ProfilObject, WorkObject } from "../shared/interface";
import Works from "../components/home/works";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
  }
`;

const MainLayout = styled.div`
  font-family: "Roboto";
  margin: 0 auto;
  max-width: 1200px;
`;

/**
 * Props
 */

interface Props {
  data: {
    backgroundHeaderImg: ChildImageSharp<FluidObject>;
    content: {
      profil: ProfilObject;
      works: WorkObject[];
    };
    identityImg: ChildImageSharp<FixedObject>;
    worksImages: { edges: { node: ChildImageSharp<FixedObject> }[] };
  };
}

/**
 * Template
 */

export default ({ data }: Props) => {
  console.log(data);
  const { backgroundHeaderImg, identityImg, content, worksImages } = data;

  return (
    <MainLayout>
      <GlobalStyle></GlobalStyle>
      <Header
        backgroundImg={backgroundHeaderImg.childImageSharp.img}
        identityImg={identityImg.childImageSharp.img}
        profil={content.profil}
      ></Header>
      <Works
        works={content.works}
        images={worksImages.edges.map((edge) => edge.node)}
      ></Works>
    </MainLayout>
  );
};

export const query = graphql`
  query {
    backgroundHeaderImg: file(relativePath: { eq: "header-background.jpg" }) {
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
    worksImages: allFile(filter: { relativePath: { regex: "/w/" } }) {
      edges {
        node {
          relativePath
          childImageSharp {
            img: fixed(quality: 100, height: 275, width: 275) {
              ...GatsbyImageSharpFixed
            }
          }
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
      works {
        company
        id
        name
        image
      }
    }
  }
`;
