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
    width: 15px;
    height: 15px;
    background-color: rgb(255, 0, 0);

    border-radius: 50%;
    pointer-events: none;
    transform: translateX(-50%) translateY(-50%);
    z-index: 9999;
    display: ${({ visible }) => (visible ? "block" : "none")};
  }
  @media (max-width: 1200px) {
    display: none;
  }
`;

function AppLayout() {
  const [circleVisible, setCircleVisible] = useState(false);
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setCirclePosition({ x: event.clientX, y: event.clientY });
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
    </StyledBox>
  );
}

export default AppLayout;
