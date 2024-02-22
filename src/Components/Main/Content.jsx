import styled from "@emotion/styled";
import About from "../../pages/About";
import Project from "../../pages/Project";
import Experience from "../../pages/Experience";
import Education from "../../pages/Education";

import Skill from "../../pages/Skill";
import Footer from "../../pages/Footer";

const Div = styled("div")`
  overflow: scroll;
  scroll-behavior: smooth;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
  text-align: justify;
  color: white;
  @media (max-width: 1200px) {
    padding-left: 0.2rem;
    margin-top: 0.3rem;
  }
  @media (min-width: 1200px) {
    padding-left: 10px;
  }
`;
function Content() {
  return (
    <Div>
      <About />
      <Skill />
      <Project />
      <Experience />
      <Education />
      <Footer />
    </Div>
  );
}

export default Content;
