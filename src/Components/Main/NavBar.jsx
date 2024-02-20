import styled from "@emotion/styled";
import { Box, Link } from "@mui/material";
const Box1 = styled(Box)`
  background-color: #8eabd1;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-end;
  }
  @media (min-width: 768px) {
    gap: 2.5rem;
    padding-block: 2rem;
    font-size: 1.5rem;
  }
`;
const Link1 = styled(Link)`
  text-decoration: none;
  color: white;

  &.active {
    background-color: #18212f;
  }
  @media (max-width: 768px) {
    padding: 0.5rem 0.3rem;
  }
  @media (min-width: 768px) {
    padding: 0.5rem 2rem;
    margin-left: 1rem;
    margin-right: 0;
  }
`;

function NavBar() {
  const navlist = ["Projects", "Experience", "Education", "Addition"];
  const handleLinkClick = (e) => {
    e.preventDefault();
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
