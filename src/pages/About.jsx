import styled from "@emotion/styled";
import PdfAdd from "../Components/Main/PdfAdd";

const Div = styled("div")`
  font-family: "Nunito Sans", sans-serif;
  position: relative;

  @media (max-width: 1200px) {
    padding-left: 0.5rem;
    padding-top: 0.2px;
    padding-right: 0.5rem;
    padding-bottom: 0.5rem;
  }
  @media (min-width: 1200px) {
    padding-left: 1.2rem;
    padding-top: 0.5rem;
    padding-bottom: 1vh;
    padding-right: 1vw;
  }
`;
const H1 = styled("h1")`
  @media (max-width: 1200px) {
    font-size: 2rem;
    margin-block: 0.2rem;
  }
  @media (min-width: 1200px) {
    font-size: 4rem;
    margin-block: 0rem;
  }
`;
const H2 = styled("h1")`
  @media (max-width: 1200px) {
    font-size: 3rem;
    margin-top: 0.2rem;
    margin-bottom: 0px;
  }
  @media (min-width: 1200px) {
    font-size: 4rem;
    margin-block: 0rem;
  }
`;
const P = styled("p")`
  @media (max-width: 1200px) {
    font-size: 1.3rem;
    margin-block: 0.8rem;
  }
  @media (min-width: 1200px) {
    font-size: 2rem;
    margin-block: 1.5rem;
  }
`;
const P2 = styled("p")`
  @media (max-width: 1200px) {
    font-size: 1rem;
    margin-block: 1rem;
    letter-spacing: 1px;
  }
  @media (min-width: 1200px) {
    letter-spacing: 1rem;
    line-height: 1.8rem;
    font-size: 1.3rem;
    margin-block: 3rem;
    letter-spacing: 1.5px;
    color: #fafafa;
  }
`;
const Span = styled("span")`
  color: #5cebcb;
`;
const Span1 = styled("span")`
  color: #5cebcb;
  font-size: 7rem;
  @media (max-width: 1200px) {
    font-size: 3rem;
    margin-block: 0.5rem;
  }
  @media (min-width: 1200px) {
    letter-spacing: 1rem;
  }
`;

// const Div2 = styled("div")``;
function About() {
  return (
    <Div className="section1" id="About">
      <H2>Hi,</H2>
      <H1>
        I&apos;m <Span1>Himanshu</Span1> ,
      </H1>
      <P>
        {" "}
        <Span>&#60;&#62;</Span> Front End Developer / React Developer
        <Span> &#60;/&#62;</Span>
      </P>

      <P2>
        A React developer with a 1‑year track record in{" "}
        <Span> frontend engineering </Span>, I specialize in
        <Span>
          {" "}
          React.js, Redux, JavaScript, Material UI and Tailwind CSS Bootstarp{" "}
        </Span>
        . As an efficient and testable code writer, my background as a News
        Anchor and Radio Jockey in the media industry has honed my communication
        skills. I excel as a communicator and leader,{" "}
        <Span>
          fostering team collaboration and ensuring stakeholder satisfaction.
        </Span>{" "}
        This is demonstrated by a notable 20% reduction in project escalations.
        I am now eager to leverage my expertise in leading complex projects,
        aiming to drive efficiency and innovation as a frontend developer.
      </P2>
      <PdfAdd />
    </Div>
  );
}

export default About;
