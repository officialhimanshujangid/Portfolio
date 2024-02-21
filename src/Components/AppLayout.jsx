import { Box } from "@mui/material";
import styled from "@emotion/styled";
// import HeaderImage from "./HeaderImage";
import Header from "./Header/Header";
import Content from "./Main/Content";
import NavBar from "./Main/NavBar";
const Box1 = styled(Box)`
  position: fixed;

  background-color: #0a192f;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 2px;
  border-radius: 10px;
  @media (max-width: 1200px) {
    width: 100vw;
    height: 98vh;
    margin-block: 10px;
  }
  @media (min-width: 1200px) {
    width: 98vw;
    height: 96vh;
  }
`;
const Head = styled(Box)`
  position: sticky;
  width: 90vw;
  z-index: 999;
`;
const Main = styled(Box)`
  display: grid;
  height: 86vh;
  color: aliceblue;
  margin-inline: 5px;
  @media (max-width: 1200px) {
    grid-template-rows: 5vh 1fr;
    height: 85vh;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 15vw 1fr;
    height: 85vh;
  }
`;

function AppLayout() {
  return (
    <Box1>
      <Head>
        <Header />
      </Head>
      <Main>
        <NavBar />
        <Content />
      </Main>
    </Box1>
  );
}

export default AppLayout;
