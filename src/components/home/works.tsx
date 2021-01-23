import React from "react";
import styled from "styled-components";
import { WorkObject } from "../../shared/interface";
import WorkList from "../shared/worklist";

/**
 * Styled Component
 */

const WorksContainer = styled.section`
  line-height: 28px;
  margin: 120px 0;
`;

const WorksHeader = styled.header`
  color: #515151;
  margin-bottom: 75px;
  text-align: center;

  h1 {
    font-size: 40px;
    text-transform: uppercase;
  }

  p {
    margin: 15px 0 0;
  }
`;

/**
 * Props Interface
 */

interface WorksProps {
  works: WorkObject[];
}

/**
 * Template
 */

export default class Works extends React.Component<WorksProps> {
  render() {
    const { works } = this.props;
    return (
      <WorksContainer>
        <WorksHeader>
          <h1>Works</h1>
          <p>制作実績など</p>
        </WorksHeader>
        <WorkList works={works}></WorkList>
      </WorksContainer>
    );
  }
}
