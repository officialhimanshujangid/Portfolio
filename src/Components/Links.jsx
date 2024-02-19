import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Box, Link } from "@mui/material";

function Links() {
  return (
    <Box sx={{ display: "flex", gap: "1rem", marginTop: "0.5rem" }}>
      <Link
        href="https://github.com/officialhimanshujangid"
        target="_blank"
        rel="noopener noreferrer"
        color={"inherit"}
      >
        <GitHubIcon sx={{ fontSize: { lg: "1.5rem" } }} />
      </Link>
      <Link
        href="https://www.linkedin.com/in/officalhimanshujangid/"
        target="_blank"
        rel="noopener noreferrer"
        color={"inherit"}
      >
        <LinkedInIcon sx={{ fontSize: { lg: "1.5rem" } }} />
      </Link>
      <Link
        href="https://twitter.com/code_with_him"
        target="_blank"
        rel="noopener noreferrer"
        color={"inherit"}
      >
        <XIcon sx={{ fontSize: { lg: "1.5rem" } }} />
      </Link>
      <Link
        href="https://www.instagram.com/hi.man.shu_j"
        target="_blank"
        rel="noopener noreferrer"
        color={"inherit"}
      >
        <InstagramIcon sx={{ fontSize: { lg: "1.5rem" } }} />
      </Link>
    </Box>
  );
}

export default Links;
