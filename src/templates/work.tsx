import React from "react";
import Helmet from "react-helmet";
import WorkHeader from "../components/work/work-header";
import { PageProps } from "gatsby";
import { WorkObject } from "../shared/interface";
import styled from "styled-components";
import { GlobalStyle } from "../shared/style";

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

/**
 * Props Interface
 */

interface WorkProps extends PageProps {
  pageContext: {
    profil: {
      firstName: string;
      lastName: string;
    };
    otherWorks: WorkObject[];
    work: WorkObject[];
  };
}

export default class Work extends React.Component<WorkProps> {
  render() {
    const { profil } = this.props.pageContext;
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
      </WorkLayout>
    );
  }
}
