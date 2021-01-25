import React from "react";
import styled from "styled-components";

/**
 * Styled Component
 */

const FooterContainer = styled.footer`
  background-color: #515151;
  height: 64px;
`;

const FooterCirle = styled.button`
  background-color: #ef75be;
  border: none;
  border-radius: 100%;
  cursor: pointer;
  display: block;
  float: right;
  height: 64px;
  margin-top: -32px;
  outline: none;
  width: 64px;

  &:before {
    content: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMTkiIHZpZXdCb3g9IjAgMCAyOCAxOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1LjQxODkgMC42Mzk5NjFMMjcuMjYyOSAxMy4wMDcxQzI4LjA4MTUgMTMuODYxOSAyOC4wODE1IDE1LjI0NDIgMjcuMjYyOSAxNi4wODk4TDI1LjI5NDcgMTguMTQ1QzI0LjQ3NiAxOC45OTk4IDIzLjE1MjMgMTguOTk5OCAyMi4zNDI0IDE4LjE0NUwxMy45Mzg0IDkuMzg3OTJMNS41NDMxNCAxOC4xNTQxQzQuNzI0NTIgMTkuMDA4OSAzLjQwMDc4IDE5LjAwODkgMi41OTA4NiAxOC4xNTQxTDAuNjEzOTcgMTYuMDk4OUMtMC4yMDQ2NTYgMTUuMjQ0MiAtMC4yMDQ2NTYgMTMuODYxOSAwLjYxMzk3IDEzLjAxNjJMMTIuNDU3OSAwLjY0OTA1NUMxMy4yNzY1IC0wLjIxNDgzIDE0LjYwMDMgLTAuMjE0ODMgMTUuNDE4OSAwLjYzOTk2MVoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=");
  }
`;

/**
 * Template
 */

export default class Footer extends React.Component {
  private scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  render() {
    return (
      <FooterContainer>
        <div>
          <FooterCirle onClick={() => this.scrollToTop()}></FooterCirle>
        </div>
      </FooterContainer>
    );
  }
}
