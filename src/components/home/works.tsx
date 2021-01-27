import { FluidObject } from "gatsby-image";
import React from "react";
import styled from "styled-components";
import { ChildImageSharp, WorkObject } from "../../shared/interface";
import { SectionTitle } from "../shared/section-title";
import WorkList from "../shared/worklist";

/**
 * Styled Component
 */

const WorksContainer = styled.section`
  margin: 120px 0;
`;

/**
 * Props Interface
 */

interface WorksProps {
  works: WorkObject[];
  images: ChildImageSharp<FluidObject>[];
}

/**
 * Template
 */

export default class Works extends React.Component<WorksProps> {
  render() {
    const { works, images } = this.props;
    return (
      <WorksContainer>
        <SectionTitle>
          <h1>Works</h1>
          <p>制作</p>
        </SectionTitle>
        <WorkList works={works} images={images}></WorkList>
      </WorksContainer>
    );
  }
}
