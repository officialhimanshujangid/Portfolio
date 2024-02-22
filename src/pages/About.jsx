import styled from "@emotion/styled";
import PdfAdd from "../Components/Main/PdfAdd";

const Div = styled("div")`
  font-family: "Nunito Sans", sans-serif;

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
    padding-bottom: 1vh;
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
    letter-spacing: 0.8rem;
    font-size: 1rem;
    margin-block: 0.5rem;
    letter-spacing: 1.5px;
    color: #8791ae;
  }
`;
const Span = styled("span")`
  color: #5cebcb;
`;
const Span1 = styled("span")`
  color: #5cebcb;
  font-size: 6rem;
  @media (max-width: 1200px) {
    font-size: 3rem;
    margin-block: 0.5rem;
  }
`;
// const Div2 = styled("div")``;
function About() {
  return (
    <Div id="About">
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
        I am a passionate Web Developer proficient in{" "}
        <Span>
          React.js, Redux, Material Ui JavaScript,Bootstrap and Tailwind CSS
        </Span>
        . With a background as a News Anchor and Radio Jockey, I bring a unique
        blend of technical expertise and effective communication skills.
        Dedicated to <Span>crafting efficient and testable code</Span>, I thrive
        on solving problems and am committed to continuous learning. As a
        reliable and mature team player, I adapt seamlessly to challenges,
        excelling under pressure. Explore my portfolio to witness the{" "}
        <Span>fusion of creativity and technology</Span>, where each project is
        a testament to my
        <Span> commitment to excellence</Span>. Let&apos;s collaborate and turn
        your visions into interactive realities.
      </P2>
      <PdfAdd />
    </Div>
  );
}

export default About;
