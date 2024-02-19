import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import ReorderIcon from "@mui/icons-material/Reorder";
const Div = styled("div")`
  display: flex;
  gap: 2rem;
  align-items: center;
`;
function Links() {
  return (
    <>
      <Div>
        <Box sx={{ display: { lg: "flex" }, gap: "3rem" }}>
          <GitHubIcon sx={{ fontSize: { lg: "2.5rem" }, color: "#4338ca" }} />
          <LinkedInIcon sx={{ fontSize: { lg: "2.5rem" }, color: "#4338ca" }} />
          <XIcon sx={{ fontSize: { lg: "2.5rem" }, color: "#4338ca" }} />
          <InstagramIcon
            sx={{ fontSize: { lg: "2.5rem" }, color: "#4338ca" }}
          />
        </Box>
        <Box sx={{ display: { lg: "none" } }}>
          <ReorderIcon sx={{ fontSize: { lg: "2.5rem" }, color: "#4338ca" }} />
        </Box>
      </Div>
    </>
  );
}

export default Links;
