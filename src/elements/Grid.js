// Grid.js

// *** 패키지 import
import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  const {
    is_flex,
    width,
    height,
    margin,
    padding,
    bg,
    children,
    center,
    _onClick,
    flexFlow,
    justifyContent,
  } = props;

  const styles = {
    justifyContent: justifyContent,
    is_flex: is_flex,
    width: width,
    margin: margin,
    height: height,
    padding: padding,
    bg: bg,
    center: center,
    flexFlow: flexFlow,
  };
  return (
    <React.Fragment>
      <GridBox onClick={_onClick} {...styles}>
        {children}
      </GridBox>
    </React.Fragment>
  );
};

Grid.defaultProps = {
  justifyContent: false,
  chidren: null,
  is_flex: false,
  width: "100%",
  padding: false,
  margin: false,
  bg: false,
  center: false,
  flexFlow: false,
  _onClick: () => {},
};

const GridBox = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  box-sizing: border-box;
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
    ${(props) => (props.bg ? `background-color: ${props.bg};` : "")}
    ${(props) =>
    props.is_flex
      ? `display: flex; align-items: center; justify-content: space-evenly; `
      : ""}
    ${(props) => (props.center ? `text-align: center;` : "")}
    ${(props) => (props.flexFlow ? "flex-flow : row wrap;" : "")}
    ${(props) =>
    props.justifyContent
      ? "justify-content: flex-start;"
      : "justify-content: space-evenly;"}
`;

export default Grid;