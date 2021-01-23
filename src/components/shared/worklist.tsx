import React from "react";
import styled from "styled-components";

/**
 * Styled Component
 */

const WorkListContainer = styled.main``;
const WorkContainer = styled.article``;

/**
 * Props Interface
 */

interface WorkListProps {
  works: {}[];
}

/**
 * Template
 */

export default class WorkList extends React.Component<WorkListProps> {
  render() {
    return (
      <WorkListContainer>
        {(this.props.works || []).map(() => (
          <WorkContainer>OK</WorkContainer>
        ))}
      </WorkListContainer>
    );
  }
}
