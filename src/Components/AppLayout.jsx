import { Box } from "@mui/material";
import styled from "@emotion/styled";
// import HeaderImage from "./HeaderImage";

import Content from "./Main/Content";
import NavBar from "./Main/NavBar";

const Box1 = styled(Box)`
  overflow: hidden;
  background-color: rgb(159, 194, 186);
  height: 100vh;
`;
function AppLayout() {
  return (
    <Box1>
      <NavBar />
      <Content />
    </Box1>
  );
}

export default AppLayout;
