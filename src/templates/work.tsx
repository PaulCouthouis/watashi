import React from "react";
import Helmet from "react-helmet";
import WorkHeader from "../components/work/work-header";
import { graphql, PageProps } from "gatsby";
import { ChildImageSharp, WorkObject } from "../shared/interface";
import styled from "styled-components";
import { GlobalStyle } from "../shared/style";
import Footer from "../components/shared/footer";
import WorkDescription from "../components/work/work-description";
import { FixedObject, FluidObject } from "gatsby-image";
import WorkList from "../components/shared/worklist";

/**
 * styled component
 */

const WorkLayout = styled.div`
  > * > * {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const WorkNavigation = styled.nav`
  background-color: #e5e5e5;
  padding: 120px 0;
`;

/**
 * Props Interface
 */

interface WorkProps extends PageProps {
  data: {
    worksImages: { edges: { node: ChildImageSharp<FluidObject> }[] };
    detailImages: { edges: { node: ChildImageSharp<FluidObject> }[] };
  };
  pageContext: {
    profil: {
      firstName: string;
      lastName: string;
    };
    otherWorks: WorkObject[];
    regex: string;
    work: WorkObject;
  };
}

export default class Work extends React.Component<WorkProps> {
  render() {
    const { props } = this;
    const { worksImages, detailImages } = props.data;
    const { profil, work, otherWorks } = props.pageContext;

    return (
      <WorkLayout>
        <Helmet>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <GlobalStyle></GlobalStyle>
        <WorkHeader
          firstName={profil.firstName}
          lastName={profil.lastName}
        ></WorkHeader>
        <WorkDescription
          work={work}
          images={detailImages.edges.map((edge) => edge.node)}
        ></WorkDescription>
        <WorkNavigation>
          <WorkList
            works={otherWorks}
            images={worksImages.edges.map((edge) => edge.node)}
          ></WorkList>
        </WorkNavigation>
        <Footer></Footer>
      </WorkLayout>
    );
  }
}

export const workQuery = graphql`
  query($regex: String) {
    worksImages: allFile(filter: { relativePath: { regex: "/works/" } }) {
      edges {
        node {
          relativePath
          childImageSharp {
            img: fluid(quality: 100, maxHeight: 275, maxWidth: 275) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    detailImages: allFile(filter: { relativePath: { regex: $regex } }) {
      edges {
        node {
          relativePath
          childImageSharp {
            img: fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
