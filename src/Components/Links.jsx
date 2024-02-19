import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Box, Button, Link } from "@mui/material";

function Links() {
  const handleGmailButtonClick = () => {
    // Replace 'your_email@gmail.com' with your actual Gmail email address
    window.location.href = "mailto:your_email@gmail.com";
  };
  const handleCallButtonClick = () => {
    // Replace 'your_phone_number' with your actual phone number
    window.location.href = "tel:+917073083470";
  };
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
      <Button variant="contained" onClick={handleGmailButtonClick}>
        Open
      </Button>
      <Button variant="contained" onClick={handleCallButtonClick}>
        Call
      </Button>
    </Box>
  );
}

export default Links;
