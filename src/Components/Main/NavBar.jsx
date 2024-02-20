import styled from "@emotion/styled";
import { Box, Link } from "@mui/material";
const Box1 = styled(Box)`
  background-color: #8eabd1;
  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: last baseline;
  }
  @media (min-width: 1200px) {
    gap: 2.5rem;
    padding-block: 2rem;
  }
`;
const Link1 = styled(Link)`
  text-decoration: none;
  color: white;
  margin-bottom: 0;
  &.active {
    background-color: #18212f;
    position: relative;
  }
  @media (max-width: 1200px) {
    padding: 0.5rem 0.2rem;
    font-size: 0.8rem;
    border-radius: 8px 8px 0 0;
  }
  @media (min-width: 1200px) {
    padding: 0.8rem 2rem;
    font-size: 1.9rem;
    margin-left: 1rem;
    margin-right: 0;
    border-radius: 30px 0 0 30px;
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
      box-shadow: 8px 8px 0 8px #18212f;
    }
    &.active::after {
      bottom: -1.2rem;
      border-radius: 0 100vw 0 0;
      box-shadow: 8px -8px 0 8px #18212f;
    }
  }
`;

function NavBar() {
  const navlist = ["Projects", "Experience", "Education", "Addition"];
  const handleLinkClick = (e) => {
    document.querySelectorAll(".section").forEach((link) => {
      link.classList.remove("active");
    });
    e.target.classList.toggle("active");
  };
  return (
    <Box1>
      <Link1
        className="section active"
        href={`#About`}
        onClick={handleLinkClick}
      >
        About
      </Link1>
      {navlist.map((item, i) => (
        <Link1
          className="section"
          href={`#${item}`}
          key={i}
          onClick={handleLinkClick}
        >
          {item}
        </Link1>
      ))}
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
