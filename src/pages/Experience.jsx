import styled from "@emotion/styled";
import { MdOutlineWork } from "react-icons/md";
const Div4 = styled("div")`
  font-family: "Nunito Sans", sans-serif;
  padding-inline: 1rem;
`;
const Div = styled("div")`
  display: flex;
  gap: 3vh;
  margin: 0;
  @media (max-width: 1200px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 1200px) {
    justify-content: space-around;
    align-items: center;
  }
`;
const Div2 = styled("div")`
  transform: translateX(400%);
  transition: all 0.5s ease-in-out;
  &.active {
    transform: translateX(0%);
    transition: all 0.5s ease-in-out;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  border: 3px solid white;
  @media (max-width: 1200px) {
    padding: 2vh 3vh;
    width: 60vw;
    border-radius: 20px;
  }
  @media (min-width: 1200px) {
    padding: 2vh 3vh;
    width: 60vw;
    border-radius: 20px;
  }
`;
const H1 = styled("h1")`
  margin: 0;
  color: #42d4b5;
  @media (max-width: 1200px) {
    font-size: 1.6rem;
    margin-block: 0.4vh;
  }
  @media (min-width: 1200px) {
    font-size: 1.6rem;
    margin-block: 0.4vh;
  }
`;
const H2 = styled("h2")`
  margin: 0;
  @media (max-width: 1200px) {
    font-size: 1.2rem;
  }
  @media (min-width: 1200px) {
    font-size: 1.2rem;
  }
`;
const P = styled("p")`
  margin: 0;
  @media (max-width: 1200px) {
    margin-block: 0.4vh;
  }
  @media (min-width: 1200px) {
    margin-block: 0.4vh;
  }
`;
const Div3 = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  font-size: 2.5rem;
  background-color: #9fc2ba;
  color: #000000;

  @media (max-width: 1200px) {
    width: 3rem;
    height: 3rem;
    border-radius: 100vw;
  }

  @media (min-width: 1200px) {
    width: 4rem;
    height: 4rem;
    border-radius: 100vw;
  }
`;
const H3 = styled("h2")`
  transform: translateX(-400%);
  transition: all 0.5s ease-in-out;
  &.active {
    transform: translateX(0%);
    transition: all 0.5s ease-in-out;
  }
  font-family: "Nunito Sans", sans-serif;
  text-align: center;
  text-align: center;
  text-transform: capitalize;
  @media (max-width: 1200px) {
    font-size: 1.2rem;
    letter-spacing: 1px;
  }
  @media (min-width: 1200px) {
    font-size: 1.9rem;
    letter-spacing: 1px;
  }
`;
function Experience() {
  return (
    <Div4 className="section1" id="Experience">
      <H3 className="hh">Professional Journey</H3>
      <Div>
        <Div2 className="hh">
          <Div3>
            <MdOutlineWork />
          </Div3>
          <H1>Frontend Engineer</H1>
          <H2>NK Technologies | Jaipur</H2>
          <P>03/2023-03/2024</P>
        </Div2>
        <Div2 className="hh">
          <Div3>
            <MdOutlineWork />
          </Div3>
          <H1>News Presenter</H1>
          <H2>Bhilai Times | Chattisgarh</H2>
          <P>09/2021-02/2023</P>
        </Div2>
        <Div2 className="hh">
          <Div3>
            <MdOutlineWork />
          </Div3>
          <H1>Radio Jockey</H1>
          <H2>90.8 FM Alwar Ki Aavaj </H2>
          <P>03/2021-08/2021</P>
        </Div2>
      </Div>
    </Div4>
  );
}

export default Experience;
