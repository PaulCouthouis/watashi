import GatsbyImage, { FixedObject } from "gatsby-image";
import React from "react";
import styled from "styled-components";
import { ChildImageSharp, WorkObject } from "../../shared/interface";
import { getImageFixed } from "../../shared/methods";

/**
 * Styled Component
 */

const WorkListContainer = styled.main`
  display: flex;
  justify-content: center;
`;

const WorkContainer = styled.a`
  line-height: 28px;
  margin: 0 15px;
  text-align: center;

  h1 {
    font-size: 16px;
  }

  h2 {
    font-size: 14px;
    font-weight: 400;
  }

  svg {
    margin-top: 40px;
  }
`;

/**
 * Props Interface
 */

interface WorkListProps {
  works: WorkObject[];
  images: ChildImageSharp<FixedObject>[];
}

/**
 * Template
 */

export default class WorkList extends React.Component<WorkListProps> {
  render() {
    return (
      <WorkListContainer>
        {(this.props.works || []).map((work) => (
          <WorkContainer
            href={`/work-${work.name.toLowerCase().replace(/\s+/g, "-")}`}
            key={work.id}
          >
            <GatsbyImage
              fixed={getImageFixed(this.props.images, work.image)}
            ></GatsbyImage>
            <h1>{work.name}</h1>
            <h2>{work.company}</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="21"
              viewBox="0 0 13 21"
              fill="none"
            >
              <path
                d="M12.4719 11.5546L3.97187 20.4302C3.38437 21.0436 2.43437 21.0436 1.85312 20.4302L0.440625 18.9552C-0.146875 18.3418 -0.146875 17.3498 0.440625 16.7429L6.46562 10.4517L0.440625 4.16043C-0.146875 3.54697 -0.146875 2.55499 0.440625 1.94806L1.84687 0.460095C2.43437 -0.153365 3.38437 -0.153365 3.96562 0.460095L12.4656 9.33568C13.0594 9.94914 13.0594 10.9411 12.4719 11.5546Z"
                fill="#EF75BE"
              />
            </svg>
          </WorkContainer>
        ))}
      </WorkListContainer>
    );
  }
}
