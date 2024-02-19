import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import Links from "./Links";

const Row = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;

function UpperLayer() {
  return (
    <Row>
      <Box
        sx={{
          display: "flex",
          gap: "2rem",
          alignItems: "center",
        }}
      >
        <Typography sx={{ display: "inline-block" }} variant="h4">
          Himanshu Jangid
        </Typography>
        <Typography sx={{ display: "inline-block" }} variant="h6">
          Web Developer
        </Typography>
      </Box>

      <Links />
    </Row>
  );
}

export default UpperLayer;
