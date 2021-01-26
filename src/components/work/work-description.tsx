import React from "react";
import styled from "styled-components";

/**
 * Styled Component
 */

const WorkDescriptionContainer = styled.section``;

/**
 * Props Interface
 */

interface WorkDescriptionProps {}

export default class WorkDescription extends React.Component<WorkDescriptionProps> {
  render() {
    return <WorkDescriptionContainer></WorkDescriptionContainer>;
  }
}
