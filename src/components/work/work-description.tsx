import GatsbyImage, { FluidObject } from "gatsby-image";
import React from "react";
import styled from "styled-components";
import { ChildImageSharp, WorkObject } from "../../shared/interface";
import { device } from "../../shared/style";
import { SectionTitle } from "../shared/section-title";

/**
 * Styled Component
 */

const WorkDescriptionContainer = styled.section`
  padding: 120px 0;
`;

const WorkDescriptionArticle = styled.article`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 0 10px;

  @media ${device.tablet} {
    align-items: inherit;
    flex-direction: row-reverse;
  }

  > .gatsby-image-wrapper {
    border: 1px solid #eee;
    margin-bottom: 20px;
    width: 90%;

    @media ${device.tablet} {
      width: calc(100% - 440px);
    }
  }
`;

const WorkDescriptionDetail = styled.div`
  margin-bottom: 20px;
  width: 90%;

  @media ${device.tablet} {
    padding-left: 30px;
    width: 440px;
  }

  h2 {
    border-bottom: 1px solid #c4c4c4;
    color: #00a1ab;
    font-size: 16px;
    line-height: 28px;
    margin-bottom: 20px;
    padding-bottom: 7px;
  }

  h3,
  p,
  ul {
    font-size: 14px;
    line-height: 21px;
  }

  h3 {
    margin: 5px 0 5px;
  }

  h3:nth-child(n + 3) {
    margin-top: 20px;
  }

  p,
  ul {
    text-indent: 5px;
  }

  ul {
    margin-left: 20px;
  }
`;

/**
 * Props Interface
 */

interface WorkDescriptionProps {
  images: ChildImageSharp<FluidObject>[];
  work: WorkObject;
}

export default class WorkDescription extends React.Component<WorkDescriptionProps> {
  render() {
    const { images, work } = this.props;
    const { details } = work;

    return (
      <WorkDescriptionContainer>
        <SectionTitle>
          <h1>{work.name}</h1>
          <p>{work.company}</p>
        </SectionTitle>
        <WorkDescriptionArticle>
          <WorkDescriptionDetail>
            <h2>プロジェクト内容</h2>
            <h3>プロジェクトの概要</h3>
            <p>{details?.summary}</p>
            <h3>業務内容</h3>
            <ul>
              {(details?.content || []).map((c, i) => (
                <li key="i">{c}</li>
              ))}
            </ul>
          </WorkDescriptionDetail>
          <GatsbyImage fluid={images[0]?.childImageSharp.img}></GatsbyImage>
          <WorkDescriptionDetail>
            <h2>担当</h2>
            <h3>タスク</h3>
            <p>{details?.charge}</p>
            <h3>環境</h3>
            <p>{details?.environnment}</p>
          </WorkDescriptionDetail>
          <GatsbyImage fluid={images[1]?.childImageSharp.img}></GatsbyImage>
        </WorkDescriptionArticle>
      </WorkDescriptionContainer>
    );
  }
}
