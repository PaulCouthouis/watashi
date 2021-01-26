import React from "react";
import styled from "styled-components";
import { SocialObject } from "../../shared/interface";

/**
 * Template
 */

const SocialContainer = styled.aside`
  background-color: #fff;

  > div {
    align-items: center;
    display: flex;
    height: 280px;
    justify-content: center;

    a {
      align-items: center;
      background-color: #ef75be;
      border-radius: 100%;
      display: flex;
      justify-content: center;
      height: 40px;
      width: 40px;

      &:nth-child(n + 2) {
        margin-left: 30px;
      }

      img {
        height: 60%;
        width: 60%;
      }
    }
  }
`;

/**
 * Props
 */

interface SocialProps {
  socials: SocialObject[];
}

export default class Social extends React.Component<SocialProps> {
  render() {
    const { socials } = this.props;

    return (
      <SocialContainer>
        <div>
          {(socials || []).map((social) => (
            <a href={social.link} key={social.name}>
              <img
                src={"data:image/svg+xml;base64," + social.icon}
                alt={social.name}
              />
            </a>
          ))}
        </div>
      </SocialContainer>
    );
  }
}
