import styled from "@emotion/styled";
import { Box } from "@mui/material";
const Img = styled.img`
  width: 100%;
  border-radius: 10px;
`;
function HeaderImage() {
  return (
    <Box
      sx={{
        width: "80px",
        height: "80px",
        borderRadius: "10px",
        position: "absolute",
        left: "50%",
        transform: "translatey(-50%) translate(-50%)",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.8)",
      }}
    >
      <Img src="ProfileImage.jpg" alt="image" />
    </Box>
  );
}

export default HeaderImage;
