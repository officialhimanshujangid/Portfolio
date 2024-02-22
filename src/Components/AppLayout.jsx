import { Box } from "@mui/material";
import styled from "@emotion/styled";
// import HeaderImage from "./HeaderImage";

import Content from "./Main/Content";
import NavBar from "./Main/NavBar";

const Box1 = styled(Box)`
  display: grid;
  grid-template-rows: 10vh 1fr;
  background-color: #0a192f;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
`;
const Head = styled(Box)`
  width: 100vw;
`;
const Main = styled(Box)`
  color: aliceblue;

  width: 100vw;
  overflow: scroll;
  scroll-behavior: smooth;
  @media (max-width: 1200px) {
  }
  @media (min-width: 1200px) {
  }
`;

function AppLayout() {
  return (
    <Box1>
      <Head>
        <NavBar />
      </Head>
      <Main>
        {/* <NavBar /> */}
        <Content />
      </Main>
    </Box1>
  );
}

export default AppLayout;
