import styled from "@emotion/styled";
import About from "../../pages/About";
import Project from "../../pages/Project";
import Experience from "../../pages/Experience";
import Education from "../../pages/Education";
import Additional from "../../pages/Additional";

const Div = styled("div")`
  overflow: scroll;
  scroll-behavior: smooth;
  padding-left: 2rem;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
  text-align: justify;
  @media (max-width: 1200px) {
    padding-left: 0.2rem;
    margin-top: 0.3rem;
    height: 76vh;
  }
  @media (min-width: 1200px) {
    padding-left: 2rem;
    height: 85vh;
  }
`;
function Content() {
  return (
    <Div>
      <About />
      <Project />
      <Experience />
      <Education />
      <Additional />
    </Div>
  );
}

export default Content;
