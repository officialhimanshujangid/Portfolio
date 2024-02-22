import styled from "@emotion/styled";
import { Box, Link } from "@mui/material";
import { MdDashboard } from "react-icons/md";
import { AiFillProject } from "react-icons/ai";
import { RiMindMap } from "react-icons/ri";
import { MdOutlineWork } from "react-icons/md";
import { TbSchool } from "react-icons/tb";
// import { TbInfoSquareRoundedFilled } from "react-icons/tb";
import { RiContactsFill } from "react-icons/ri";
const Box1 = styled(Box)`
  height: 12vh;
  position: sticky;
  top: 0;
  padding-inline: 5px;
  /* background-color: rgb(159, 194, 186); */
  display: flex;
  font-family: "Nunito Sans", sans-serif;
  @media (max-width: 1200px) {
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  @media (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    /* padding-block: 10px; */
  }
`;
const Box2 = styled(Box)`
  display: flex;
  flex-direction: row;
  @media (max-width: 1200px) {
    justify-content: space-around;
    align-items: center;
  }
  @media (min-width: 1200px) {
    justify-content: space-around;
  }
`;
const Link1 = styled(Link)`
  color: #000000;
  display: flex;
  text-decoration: none;
  width: 100%;

  &.active {
    background-color: #0a192f;
    position: relative;
    border-radius: 100vh;
    color: white;
  }
  @media (max-width: 1200px) {
    padding: 10px;
    font-size: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  @media (min-width: 1200px) {
    align-items: center;
    padding: 0.3rem 1.5rem;
    font-size: 1.2rem;
    border-radius: 100px 100px 100px 100px;
    gap: 10px;
  }
`;
const Span1 = styled("span")``;
const Span2 = styled("span")`
  @media (min-width: 1200px) {
  }
  @media (max-width: 1200px) {
  }
`;
const Box3 = styled("h1")`
  @media (min-width: 1200px) {
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  @media (max-width: 1200px) {
    font-size: 1rem;
    margin: 0;
    padding: 0;
    letter-spacing: 3px;
  }
`;

function NavBar() {
  const handleLinkClick = (e) => {
    document.querySelectorAll(".section").forEach((link) => {
      link.classList.remove("active");
    });

    e.target.closest(".section").classList.toggle("active");
  };

  return (
    <Box1>
      <Box3>&#60;&#62; Himanshu Jangid &#60;/&#62;</Box3>
      <Box2>
        <Link1
          className="section active"
          href={`#About`}
          onClick={handleLinkClick}
        >
          <Span1>
            <MdDashboard />
          </Span1>
          <Span2>About</Span2>
        </Link1>
        <Link1 className="section" href={`#Skills`} onClick={handleLinkClick}>
          <Span1>
            <RiMindMap />
          </Span1>
          <Span2>Skills</Span2>
        </Link1>
        <Link1
          className="section "
          href={`#Projects`}
          onClick={handleLinkClick}
        >
          <Span1>
            <AiFillProject />
          </Span1>
          <Span2>Projects</Span2>
        </Link1>
        <Link1
          className="section "
          href={`#Experience`}
          onClick={handleLinkClick}
        >
          <Span1>
            <MdOutlineWork />
          </Span1>
          <Span2>Experience</Span2>
        </Link1>
        <Link1
          className="section "
          href={`#Education`}
          onClick={handleLinkClick}
        >
          <Span1>
            <TbSchool />
          </Span1>
          <Span2>Education</Span2>
        </Link1>
        <Link1 className="section " href={`#contact`} onClick={handleLinkClick}>
          <Span1>
            <RiContactsFill />
          </Span1>
          <Span2>Contact</Span2>
        </Link1>
      </Box2>
    </Box1>
  );
}

export default NavBar;

// <Box
//   sx={{
//     backgroundColor: "green",
//   }}
// >
//   <nav>
//     <Link1 href="#about">about</Link1>

//     <Link1 href="#home">Home</Link1>
//     <Link1>about</Link1>

//     <Link1>about</Link1>
//   </nav>
// </Box>
