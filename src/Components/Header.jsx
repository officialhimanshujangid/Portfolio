import styled from "@emotion/styled";
import { Box } from "@mui/material";
import UpperLayer from "./UpperLayer";
import LowerLayer from "./LowerLayer";
const Box1 = styled(Box)`
  color: #f9fafb;
`;

function Header() {
  return (
    <Box1>
      <UpperLayer />
      <LowerLayer />
    </Box1>
  );
}

export default Header;
