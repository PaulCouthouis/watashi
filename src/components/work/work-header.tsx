import React from "react";
import styled from "styled-components";

/**
 * Styled Component
 */

const WorkHeaderContainer = styled.header`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  height: 65px;

  p {
    align-items: center;
    color: #515151;
    display: flex;
    font-size: 20px;
    line-height: 65px;

    a:before {
      content: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAxMyAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAuNDM5ODQ3IDkuOTM3NDVMOC45Mzk4NSAxLjQzNzQ1QzkuNTI3MzUgMC44NDk5NTEgMTAuNDc3MyAwLjg0OTk1MSAxMS4wNTg2IDEuNDM3NDVMMTIuNDcxMSAyLjg0OTk1QzEzLjA1ODYgMy40Mzc0NSAxMy4wNTg2IDQuMzg3NDUgMTIuNDcxMSA0Ljk2ODdMNi40NTIzNSAxMUwxMi40NzczIDE3LjAyNUMxMy4wNjQ4IDE3LjYxMjQgMTMuMDY0OCAxOC41NjI1IDEyLjQ3NzMgMTkuMTQzN0wxMS4wNjQ4IDIwLjU2MjVDMTAuNDc3MyAyMS4xNSA5LjUyNzM1IDIxLjE1IDguOTQ2MSAyMC41NjI1TDAuNDQ2MDk3IDEyLjA2MjVDLTAuMTQ3NjUzIDExLjQ3NSAtMC4xNDc2NTMgMTAuNTI1IDAuNDM5ODQ3IDkuOTM3NDVaIiBmaWxsPSIjRUY3NUJFIi8+Cjwvc3ZnPgo=");
      margin: 0 25px 0 10px;
      position: relative;
      top: 4px;
    }

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
        <p>
          <a href="/">
            {firstName} <span>{lastName}</span>
          </a>
        </p>
      </WorkHeaderContainer>
    );
  }
}
