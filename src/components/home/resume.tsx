import React from "react";
import styled from "styled-components";
import { ResumeObject } from "../../shared/interface";

/**
 * Styled Component
 */

const ResumeContainer = styled.section`
  background-color: #f7f7f7;
  color: #515151;
  line-height: 28px;
  padding: 115px 0 100px;
`;

const ResumeList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: -130px;
`;

const ResumeArticle = styled.article`
  max-width: 545px;
  padding-top: 130px;
  width: 50%;
`;

const ResumeTitle = styled.h1`
  border-bottom: 1px solid #c4c4c4;
  color: #00a1ab;
  font-size: 16px;
  margin-left: 25px;
  text-transform: uppercase;

  &:before {
    content: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNSAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzLjczOTUgNUMxMy45NDc1IDUgMTQuMTE3NiA0LjgzMTI1IDE0LjExNzYgNC42MjVWMy4zNzVDMTQuMTE3NiAzLjE2ODc1IDEzLjk0NzUgMyAxMy43Mzk1IDNIMTMuMTA5MlYxLjVDMTMuMTA5MiAwLjY3MTg3NSAxMi40MzE3IDAgMTEuNTk2NiAwSDEuNTEyNjFDMC42Nzc1MjEgMCAwIDAuNjcxODc1IDAgMS41VjE0LjVDMCAxNS4zMjgxIDAuNjc3NTIxIDE2IDEuNTEyNjEgMTZIMTEuNTk2NkMxMi40MzE3IDE2IDEzLjEwOTIgMTUuMzI4MSAxMy4xMDkyIDE0LjVWMTNIMTMuNzM5NUMxMy45NDc1IDEzIDE0LjExNzYgMTIuODMxMyAxNC4xMTc2IDEyLjYyNVYxMS4zNzVDMTQuMTE3NiAxMS4xNjg3IDEzLjk0NzUgMTEgMTMuNzM5NSAxMUgxMy4xMDkyVjlIMTMuNzM5NUMxMy45NDc1IDkgMTQuMTE3NiA4LjgzMTI1IDE0LjExNzYgOC42MjVWNy4zNzVDMTQuMTE3NiA3LjE2ODc1IDEzLjk0NzUgNyAxMy43Mzk1IDdIMTMuMTA5MlY1SDEzLjczOTVaTTYuNTU0NjIgNEM3LjY2NzAyIDQgOC41NzE0MyA0Ljg5Njg3IDguNTcxNDMgNkM4LjU3MTQzIDcuMTAzMTMgNy42NjcwMiA4IDYuNTU0NjIgOEM1LjQ0MjIzIDggNC41Mzc4MiA3LjEwMzEzIDQuNTM3ODIgNkM0LjUzNzgyIDQuODk2ODcgNS40NDIyMyA0IDYuNTU0NjIgNFpNMTAuMDg0IDExLjRDMTAuMDg0IDExLjczMTIgOS43Njg5MSAxMiA5LjM3ODE1IDEySDMuNzMxMDlDMy4zNDAzNCAxMiAzLjAyNTIxIDExLjczMTIgMy4wMjUyMSAxMS40VjEwLjhDMy4wMjUyMSA5LjgwNjI1IDMuOTczNzQgOSA1LjE0Mjg2IDlINS4zMDA0MkM1LjY4ODAzIDkuMTU5MzggNi4xMTAyOSA5LjI1IDYuNTU0NjIgOS4yNUM2Ljk5ODk1IDkuMjUgNy40MjQzNyA5LjE1OTM4IDcuODA4ODIgOUg3Ljk2NjM5QzkuMTM1NSA5IDEwLjA4NCA5LjgwNjI1IDEwLjA4NCAxMC44VjExLjRaIiBmaWxsPSIjQzRDNEM0Ii8+Cjwvc3ZnPgo=");
    margin: 2px 0 0 -25px;
    position: absolute;
  }
`;

const TimelineList = styled.ul`
  margin-top: 25px;

  &:before {
    // clean the border before the first disc
    background-color: #f7f7f7;
    content: "";
    display: block;
    height: 9px;
    margin-left: 5px;
    position: absolute;
    width: 1px;
  }

  li {
    border-left: 1px solid #c4c4c4;
    display: flex;
    flex-wrap: wrap;
    margin-left: 5px;
    padding: 0 0 30px 20px;

    &:before {
      align-items: center;
      background-color: #f7f7f7;
      color: #c4c4c4;
      content: "•";
      display: flex;
      height: 9px;
      margin: 9px 0 0 -22.5px;
      position: absolute;
    }

    &:last-child {
      border: none;
      margin: -9px 0 0 5.5px;
    }

    > * {
      font-size: 16px;
      font-weight: bold;
    }

    h2,
    p {
      width: 100%;
    }

    p {
      font-size: 14px;
      font-weight: normal;
      line-height: 21px;
    }

    h1:after {
      content: " | ";
      white-space: pre;
    }

    time > span:nth-child(1):after {
      content: " - ";
      white-space: pre;
    }
  }
`;

const SkillTable = styled.table`
  font-size: 14px;
  margin: 20px 0 0 20px;

  td:nth-child(1) {
    font-weight: bold;
    padding-right: 70px;
  }

  td:nth-child(2) {
    padding-right: 20px;
  }
`;

const SkillDot = styled.span<{ checked?: boolean }>`
  color: ${(props) => {
    console.log(props);
    return props.checked ? "#00A1AB" : "#c4c4c4";
  }};
  font-size: 28px;
  margin-right: 5px;
  vertical-align: bottom;

  &:before {
    content: "•";
  }
`;

/**
 * Props
 */

interface ResumeProps {
  resume: ResumeObject;
}

/**
 * Template
 */

export default class Resume extends React.Component<ResumeProps> {
  private convertDate2YearMonth(jsonDate: string) {
    const date = new Date(jsonDate);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    return `${year}.${month < 10 ? `0${month}` : month}`;
  }

  private getSkillDots(score: number) {
    return Array.from(Array(5).keys()).map((i) => {
      return <SkillDot checked={score > i}></SkillDot>;
    });
  }

  render() {
    const { experience, education, skills } = this.props.resume;

    return (
      <ResumeContainer>
        <ResumeList>
          <ResumeArticle>
            <ResumeTitle>Experience</ResumeTitle>
            <TimelineList>
              {(experience || []).map((exp) => (
                <li>
                  <h1>{exp.position}</h1>
                  <time>
                    <span>{this.convertDate2YearMonth(exp.startDate)}</span>
                    <span>{this.convertDate2YearMonth(exp.endDate)}</span>
                  </time>
                  <h2>{exp.company}</h2>
                  <p>{exp.description}</p>
                </li>
              ))}
            </TimelineList>
          </ResumeArticle>
          <ResumeArticle>
            <ResumeTitle>Education</ResumeTitle>
            <TimelineList>
              {(education || []).map((educ) => (
                <li>
                  <h1>{educ.subject}</h1>
                  <time>
                    <span>{this.convertDate2YearMonth(educ.startDate)}</span>
                    <span>{this.convertDate2YearMonth(educ.endDate)}</span>
                  </time>
                  <h2>{educ.school}</h2>
                </li>
              ))}
            </TimelineList>
          </ResumeArticle>
          <ResumeArticle>
            <ResumeTitle>Skill</ResumeTitle>
            <SkillTable>
              <tbody>
                {(skills || []).map((skill) => (
                  <tr>
                    <td>{skill.name}</td>
                    <td data-score={skill.score}>
                      {this.getSkillDots(skill.score)}
                    </td>
                    <td>{skill.details}</td>
                  </tr>
                ))}
              </tbody>
            </SkillTable>
          </ResumeArticle>
          <ResumeArticle>
            <ResumeTitle>Interrest</ResumeTitle>
          </ResumeArticle>
        </ResumeList>
      </ResumeContainer>
    );
  }
}
