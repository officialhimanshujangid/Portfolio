import styled from "@emotion/styled";
import About from "../../pages/About";
import Project from "../../pages/Project";
import Experience from "../../pages/Experience";
import Education from "../../pages/Education";

import Skill from "../../pages/Skill copy";
import Footer from "../../pages/Footer";

const Div = styled("div")`
  text-align: justify;
  color: white;
  background-color: #024452;
  height: 88vh;
  overflow: scroll;
  overflow-x: hidden;
  scroll-behavior: smooth;
  box-shadow: 0px -5px 5px rgba(1, 18, 32, 0.3);
  @media (max-width: 1200px) {
    padding: 0.2rem;
    /* margin-top: 0.3rem; */
    margin-inline: 8px;
    border-radius: 30px 30px 0 0;
  }
  @media (min-width: 1200px) {
    padding: 5px;
    margin-inline: 10px;
    border-radius: 30px 30px 0 0;
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
