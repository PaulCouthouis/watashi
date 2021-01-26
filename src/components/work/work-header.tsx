import React from "react";
import styled from "styled-components";

/**
 * Styled Component
 */

const WorkHeaderContainer = styled.header`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  height: 65px;

  div {
    color: #515151;
    font-size: 20px;
    line-height: 65px;

    span {
      text-transform: uppercase;
    }
  }
`;

/**
 * Props Interface
 */

interface WorkHeaderProps {
  firstName: string;
  lastName: string;
}

export default class WorkHeader extends React.Component<WorkHeaderProps> {
  render() {
    const { firstName, lastName } = this.props;
    return (
      <WorkHeaderContainer>
        <div>
          {firstName} <span>{lastName}</span>
        </div>
      </WorkHeaderContainer>
    );
  }
}
