import styled from "@emotion/styled";
import About from "../../pages/About";
import Project from "../../pages/Project";
import Experience from "../../pages/Experience";
import Education from "../../pages/Education";

import Skill from "../../pages/Skill";
import Footer from "../../pages/Footer";

const Div = styled("div")`
  text-align: justify;
  color: white;
  background-color: #032127;
  height: 88vh;
  overflow: scroll;
  scroll-behavior: smooth;
  @media (max-width: 1200px) {
    padding-left: 0.2rem;
    margin-top: 0.3rem;
  }
  @media (min-width: 1200px) {
    padding: 5px;
  }
`;

function Content() {
  function handleScroll() {
    const triggerBottom = (window.innerHeight / 5) * 4;
    const anm = document.querySelectorAll(".hh");

    anm.forEach((el) => {
      const skl = el.getBoundingClientRect();
      skl.y < triggerBottom && el.classList.add("active");
      skl.y > triggerBottom && el.classList.remove("active");
    });
  }
  return (
    <Div onScroll={() => handleScroll()}>
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
