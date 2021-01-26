import { graphql } from "gatsby";
import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";

import HomeHeader from "../components/home/home-header";
import { FixedObject, FluidObject } from "gatsby-image";
import {
  ChildImageSharp,
  ProfilObject,
  ResumeObject,
  SocialObject,
  WorkObject,
} from "../shared/interface";
import Works from "../components/home/works";
import Resume from "../components/home/resume";
import Social from "../components/home/social";
import Footer from "../components/shared/footer";
import { GlobalStyle } from "../shared/style";

const MainLayout = styled.div`
  > * > * {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }
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
      resume: ResumeObject;
      socials: SocialObject[];
    };
    identityImg: ChildImageSharp<FixedObject>;
    interrestImages: { edges: { node: ChildImageSharp<FixedObject> }[] };
    worksImages: { edges: { node: ChildImageSharp<FixedObject> }[] };
  };
}

/**
 * Template
 */

export default ({ data }: Props) => {
  const {
    backgroundHeaderImg,
    identityImg,
    content,
    worksImages,
    interrestImages,
  } = data;

  return (
    <MainLayout>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle></GlobalStyle>
      <HomeHeader
        backgroundImg={backgroundHeaderImg.childImageSharp.img}
        identityImg={identityImg.childImageSharp.img}
        profil={content.profil}
      ></HomeHeader>
      <Works
        works={content.works}
        images={worksImages.edges.map((edge) => edge.node)}
      ></Works>
      <Resume
        resume={content.resume}
        interrestImages={interrestImages.edges.map((edge) => edge.node)}
      ></Resume>
      <Social socials={content.socials}></Social>
      <Footer></Footer>
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
    worksImages: allFile(filter: { relativePath: { regex: "/works/" } }) {
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
    interrestImages: allFile(
      filter: { relativePath: { regex: "/interrest/" } }
    ) {
      edges {
        node {
          relativePath
          childImageSharp {
            img: fixed(quality: 100, height: 128, width: 128) {
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
      resume {
        experience {
          company
          description
          endDate
          position
          startDate
        }
        education {
          endDate
          school
          startDate
          subject
        }
        skills {
          details
          name
          score
        }
        interrests {
          details
          image
          name
        }
      }
      socials {
        icon
        link
        name
      }
    }
  }
`;
