import styled from "@emotion/styled";
import { RiHtml5Fill } from "react-icons/ri";
import { SiCss3, SiTailwindcss } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { FaReact } from "react-icons/fa6";
import { TbBrandRedux } from "react-icons/tb";
import { SiReactquery } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { SiReactrouter } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { Box } from "@mui/material";
import { SiNextdotjs } from "react-icons/si";
const Div = styled("div")`
  font-family: "Nunito Sans", sans-serif;
  display: grid;
  gap: 2vw;
  margin-bottom: 5vh;
  padding-inline: 1rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
const Box1 = styled(Box)`
  border: 3px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 0.9vh;
  /* &:hover {
    transform: scale(0.9);
    transition: all 0.3s ease-in-out;
  } */
  transform: translateX(400%);
  transition: all 0.5s ease-in-out;
  &.active {
    transform: translateX(0%);
    transition: all 0.5s ease-in-out;
  }
  @media (max-width: 1200px) {
    padding: 3vh 5vw;
    border-radius: 10px;
  }
  @media (min-width: 1200px) {
    padding: 3vh 5vw;
    border-radius: 10px;
  }
`;
const H1 = styled(Box)`
  font-weight: 300;
  @media (max-width: 1200px) {
    font-size: 1.3rem;
  }
  @media (min-width: 1200px) {
    font-size: 1.5rem;
    letter-spacing: 2px;
  }
`;
const H2 = styled(Box)`
  font-size: 2.5rem;
  border-radius: 100vw;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: background 6s ease-in-out infinite;
  background-color: #073375;
  color: #f5eeee;
  @media (max-width: 1200px) {
    width: 50px;
    height: 50px;
    font-size: 30px;
  }
  @keyframes background {
    0% {
      background-color: #073375;
      color: #ffffff;
    }
    50% {
      background-color: white;
      color: #073375;
    }
  }
`;
const H3 = styled("h1")`
  font-family: "Nunito Sans", sans-serif;
  text-align: center;
  text-align: center;
  text-transform: capitalize;
  transform: translateX(-400%);
  transition: all 0.5s ease-in-out;
  &.active {
    transform: translateX(0%);
    transition: all 0.5s ease-in-out;
  }
  @media (max-width: 1200px) {
    font-size: 1.2rem;
    letter-spacing: 1px;
  }
  @media (min-width: 1200px) {
    font-size: 1.9rem;
    letter-spacing: 1px;
  }
`;

function Skill() {
  return (
    <Box
      className="section1"
      id="Skills"
      sx={{
        marginBlock: "5vh",
      }}
    >
      <H3 className="hh"> Expertise Snapshot</H3>
      <Div>
        <Box1 className="hh">
          <H2>
            <RiHtml5Fill />
          </H2>
          <H1>HTML</H1>
        </Box1>
        <Box1 className="hh">
          <H2>
            <SiCss3 />
          </H2>
          <H1>CSS</H1>
        </Box1>
        <Box1 className="hh">
          <H2>
            <DiJavascript />
          </H2>
          <H1>JavaScript</H1>
        </Box1>
        <Box1 className="hh">
          <H2>
            <FaReact />
          </H2>
          <H1>React.JS</H1>
        </Box1>
        <Box1 className="hh">
          <H2>
            <SiNextdotjs />
          </H2>
          <H1>Next.JS</H1>
        </Box1>
        <Box1 className="hh">
          <H2>
            <TbBrandRedux />
          </H2>
          <H1>Redux</H1>
        </Box1>
        <Box1 className="hh">
          <H2>
            <SiReactquery />
          </H2>
          <H1>React Query</H1>
        </Box1>
        <Box1 className="hh">
          <H2>
            <SiTailwindcss />
          </H2>
          <H1>Tailwind CSS</H1>
        </Box1>
        <Box1 className="hh">
          <H2>
            <FaBootstrap />
          </H2>
          <H1>Bootstrap</H1>
        </Box1>
        <Box1 className="hh">
          <H2>
            <SiReactrouter />
          </H2>
          <H1>React-Router</H1>
        </Box1>
        <Box1 className="hh">
          <H2>
            <SiMui />
          </H2>
          <H1>Material-UI</H1>
        </Box1>
      </Div>
    </Box>
  );
}

export default Skill;
