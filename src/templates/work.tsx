import React from "react";

/**
 * Props Interface
 */

interface WorkProps {}

export default class Work extends React.Component<WorkProps> {
  render() {
    console.log(this.props);
    return <span></span>;
  }
}
