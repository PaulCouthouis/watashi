import React from "react";
import styled from "styled-components";

/**
 * Styled Component
 */

const WorksContainer = styled.section`
  line-height: 28px;
  margin: 120px 0;
`;

const WorksHeader = styled.header`
  color: #515151;
  text-align: center;

  h2 {
    font-size: 40px;
    margin: 0;
    text-transform: uppercase;
  }

  p {
    margin: 15px 0 0;
  }
`;

/**
 * Props Interface
 */

interface WorksProps {}

/**
 * Template
 */

export default class Works extends React.Component<WorksProps> {
  render() {
    return (
      <WorksContainer>
        <WorksHeader>
          <h2>Works</h2>
          <p>制作実績など</p>
        </WorksHeader>
      </WorksContainer>
    );
  }
}
