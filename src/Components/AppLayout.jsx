/* eslint-disable no-unused-vars */
import { Box } from "@mui/material";
import styled from "@emotion/styled";
import { useState } from "react";

import Content from "./Main/Content";
import NavBar from "./Main/NavBar";

const StyledBox = styled(Box)`
  overflow: hidden;
  background-color: rgb(205, 231, 225);
  height: 100vh;
  cursor: none;

  position: relative; /* Make the container relative for positioning the circle */
`;

const Circle = styled.div`
  @media (min-width: 1200px) {
    position: absolute;
    width: 10px;
    height: 10px;
    /* background-color: rgb(1, 58, 62); */
    border: 8px solid rgb(128, 182, 197);
    border-radius: 50%;
    pointer-events: none;
    transform: translateX(-50%) translateY(-50%);
    z-index: 9999;
    display: ${({ visible }) => (visible ? "block" : "none")};
    animation: blink 1s ease-in-out infinite;
    @keyframes blink {
      0%{
        border: 10px solid rgb(128, 182, 197);
      }
    25%{
        border: 7px solid rgb(128, 182, 197);
      }
      50%{
        border: 5px solid rgb(128, 182, 197);
      }
      75%{
        border: 7px solid rgb(128, 182, 197);
      }
      100%{
        border: 10px solid rgb(128, 182, 197);
      }
      
    }
  }
  }
  @media (max-width: 1200px) {
    display: none;
  }
`;
const Circle2 = styled.div`
  @media (min-width: 1200px) {
    position: absolute;
    width: 12px;
    height: 12px;
    background-color: rgb(255, 166, 0);
    /* border: 10px solid rgb(5, 141, 179); */
    border-radius: 50%;
    pointer-events: none;
    transform: translateX(-50%) translateY(-50%);
    z-index: 9999;
    display: ${({ visible }) => (visible ? "block" : "none")};
   
  @media (max-width: 1200px) {
    display: none;
  }
`;

function AppLayout() {
  const [circleVisible, setCircleVisible] = useState(false);
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });
  const [circlePosition2, setCirclePosition2] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setCirclePosition2({ x: event.clientX, y: event.clientY });
    setTimeout(function () {
      setCirclePosition({ x: event.clientX, y: event.clientY });
    }, 150);
  };

  const handleMouseEnter = () => {
    setCircleVisible(true);
  };

  const handleMouseLeave = () => {
    setCircleVisible(false);
  };

  return (
    <StyledBox
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <NavBar />
      <Content />
      <Circle
        visible={circleVisible}
        style={{
          left: circlePosition.x,
          top: circlePosition.y,
        }}
      />
      <Circle2
        visible={circleVisible}
        style={{
          left: circlePosition2.x,
          top: circlePosition2.y,
        }}
      />
    </StyledBox>
  );
}

export default AppLayout;
