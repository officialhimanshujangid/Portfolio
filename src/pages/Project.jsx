import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { ImLink } from "react-icons/im";

const Div = styled(Box)`
  font-family: "Nunito Sans", sans-serif;
  padding-inline: 1rem;
`;
const Div2 = styled(Box)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  cursor: none;
`;
const Div4 = styled(Box)`
  border: 1px solid white;
  padding: 2vh 2vw;
  margin: 1.5vh;
  transition: all 0.3s ease-in-out;
  border-radius: 10px;
  cursor: none;
  &:hover {
    transform: scale(0.95);
    transition: all 0.3s ease-in-out;
  }
`;
const Div3 = styled("a")`
  width: 95%;
  text-decoration: none;
  cursor: none;
  color: aliceblue;
  transform: translateX(-400%);
  transition: all 0.5s ease-in-out;
  &.active {
    transform: translateX(0%);
    transition: all 0.5s ease-in-out;
  }
  @media (max-width: 1200px) {
    width: 95%;
  }
`;
const H1 = styled("h1")`
  margin: 0;
  margin-bottom: 0.3vh;
  color: #00ffc8;
  font-weight: 100;
  letter-spacing: 2px;
  @media (max-width: 1200px) {
    font-size: 1.5rem;
  }
  @media (min-width: 1200px) {
    font-size: 1.6rem;
  }
`;
const H2 = styled("h2")`
  margin: 0;
  font-weight: 100;
  margin-bottom: 0.3vh;
  @media (max-width: 1200px) {
    font-size: 1rem;
    letter-spacing: 1px;
  }
  @media (min-width: 1200px) {
    font-size: 1rem;
    letter-spacing: 1px;
  }
`;
const H3 = styled("h3")`
  margin: 0;
  margin-bottom: 0.3vh;
  color: #ffffff;
  font-weight: 100;

  @media (max-width: 1200px) {
    font-size: 1.05rem;
    letter-spacing: 1px;
    /* display: none; */
  }
  @media (min-width: 1200px) {
    font-size: 1.1rem;
    letter-spacing: 1px;
  }
`;
const H4 = styled("h3")`
  text-align: center;
  text-transform: capitalize;
  transform: translateX(400%);
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
const Span = styled("span")`
  color: #00ffc8;
`;
const Span2 = styled("span")`
  color: #0c88ee;
`;

function Project() {
  return (
    <Div className="section1" id="Projects">
      <H4 className="hh">Project Showcase</H4>
      <Div2>
        <Div3
          className="hh"
          href="https://the-wild-oasis-by-himanshu.netlify.app/"
        >
          <Div4>
            <H1>
              {" "}
              <Span2>
                <ImLink />
              </Span2>{" "}
              The Wild OASIS
            </H1>
            <H2>
              ( Website to handle All management of hotel with great features)
            </H2>
            <H3>
              The Wild Oasis is a platform that is created using many
              professional libraries from Reactecosystem such as
              <Span>
                {" "}
                styled components, React query , React hook forms and React
                Router{" "}
              </Span>
              tomanage all the data of a Hotel and give us features like
              Bookings ,Sales data, occupancy details, stay duration , Hotel
              overview , user Login etc.
            </H3>
          </Div4>
        </Div3>
        <Div3 className="hh" href="https://shopmart-by-himanshu.netlify.app">
          <Div4>
            <H1>
              {" "}
              <Span2>
                <ImLink />
              </Span2>{" "}
              SHOPMART
            </H1>
            <H2>
              ( An e-commerce website with full functionality and attractive ui)
            </H2>
            <H3>
              It offers an engaging interface, streamlined cart management, and
              secure checkout. A diverseproduct catalog ensures a tailored
              experience, while a commitment to quality, exceptional service,
              and prompt delivery sets Shopmart apart. Elevate your resume by
              highlighting hands-on experience in crafting seamless{" "}
              <Span>
                digital user experiences, managing diverse product catalogs, and
                implementing secure e-commerce solutions
              </Span>
            </H3>
          </Div4>
        </Div3>
        <Div3
          className="hh"
          href="https://fast-react-pizza-by-himanshu.netlify.app/"
        >
          <Div4>
            <H1>
              {" "}
              <Span2>
                <ImLink />
              </Span2>{" "}
              FAST REACT PIZZA CO.
            </H1>
            <H2>(Ultimate Stop for Quick Food Delivery)</H2>
            <H3>
              Used <Span>React and Tailwind CSS </Span>to design sleek user
              interfaces for FastReact Pizza, a
              <Span> comprehensive food delivery app </Span> with realtime
              features. Integrated Redux for efficient state management,
              employing over 3 professional libraries for enhanced
              functionality.
            </H3>
          </Div4>
        </Div3>
        <Div3 className="hh" href="https://mapty-by-himanshu.netlify.app/">
          <Div4>
            <H1>
              {" "}
              <Span2>
                <ImLink />
              </Span2>{" "}
              MAPTY
            </H1>
            <H2>
              ( Website for tracking of exercise like Running and Cycling with
              access of Map)
            </H2>
            <H3>
              MAPTY is a website using <Span>HTML, CSS , JAVASCRIPT</Span> in
              which User can easily track and observehis workout cycle . UI
              displays map with <Span>geolocation navigator</Span> that turns
              out to the currentlocation of user
            </H3>
          </Div4>
        </Div3>
        <Div3 className="hh" href="https://bankist-by-himanshu.netlify.app/">
          <Div4>
            <H1>
              {" "}
              <Span2>
                <ImLink />
              </Span2>{" "}
              BANKIST
            </H1>
            <H2>(Website for banking with all the features)</H2>
            <H3>
              Created a website using <Span>HTML, CSS , JAVASCRIPT</Span> that
              is named as bankist . Bankist hasfeatures like transferring money
              from one account to another account, loans services, all
              themovements and interset calculations .
            </H3>
          </Div4>
        </Div3>
      </Div2>
    </Div>
  );
}

export default Project;
