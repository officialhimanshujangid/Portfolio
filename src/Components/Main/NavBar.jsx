import styled from "@emotion/styled";
import { Box, Link } from "@mui/material";
import { MdDashboard } from "react-icons/md";
import { AiFillProject } from "react-icons/ai";
import { RiMindMap } from "react-icons/ri";
import { MdOutlineWork } from "react-icons/md";
import { TbSchool } from "react-icons/tb";
import { TbInfoSquareRoundedFilled } from "react-icons/tb";
const Box1 = styled(Box)`
  background-color: #9fc2ba;
  display: flex;
  flex-direction: column;
  font-family: "Nunito Sans", sans-serif;

  @media (max-width: 1200px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    /* height: 2.3rem; */
    border-radius: 5px;
  }
  @media (min-width: 1200px) {
    gap: 1rem;
    padding-block: 2rem;
    height: 74vh;
  }
`;
const Link1 = styled(Link)`
  text-decoration: none;
  color: #000000;
  margin-bottom: 0;

  &.active {
    background-color: #0a192f;
    position: relative;
    color: white;
  }
  @media (max-width: 1200px) {
    padding: 7px;
    font-size: 0.8rem;
    border-radius: 100vw;
  }
  @media (min-width: 1200px) {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0.3rem 1.5rem;
    font-size: 1.5rem;
    margin-left: 1rem;
    margin-right: 0;
    border-radius: 100px 0 0 100px;
    &.active::before,
    &.active::after {
      content: "";
      position: absolute;
      width: 1.2rem;
      height: 1.2rem;
      right: 0;
      background-color: transparent;
    }
    &.active::before {
      top: -1.2rem;
      border-radius: 0 0 100vw 0;
      box-shadow: 5px 5px 0 5px #0a192f;
    }
    &.active::after {
      bottom: -1.2rem;
      border-radius: 0 100vw 0 0;
      box-shadow: 5px -5px 0 5px #0a192f;
    }
  }
`;
const Span1 = styled("span")``;
const Span2 = styled("span")`
  @media (min-width: 1200px) {
    margin-left: 5px;
  }
  @media (max-width: 1200px) {
    display: none;
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
      <Link1 className="section" href={`#Slills`} onClick={handleLinkClick}>
        <Span1>
          <RiMindMap />
        </Span1>
        <Span2>Skills</Span2>
      </Link1>
      <Link1 className="section " href={`#Projects`} onClick={handleLinkClick}>
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
      <Link1 className="section " href={`#Education`} onClick={handleLinkClick}>
        <Span1>
          <TbSchool />
        </Span1>
        <Span2>Education</Span2>
      </Link1>
      <Link1
        className="section "
        href={`#Additional`}
        onClick={handleLinkClick}
      >
        <Span1>
          <TbInfoSquareRoundedFilled />
        </Span1>
        <Span2>Additional</Span2>
      </Link1>
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
