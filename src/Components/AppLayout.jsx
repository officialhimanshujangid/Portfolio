import { Box } from "@mui/material";
import styled from "@emotion/styled";
import HeaderImage from "./HeaderImage";
import Header from "./Header";
const Div1 = styled(Box)`
  width: 90vw;
  height: 85vh;
  background-color: #18212f;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 2px;
  border-radius: 10px;
`;

function AppLayout() {
  return (
    <Div1>
      <HeaderImage />
      <Header />
    </Div1>
  );
}

export default AppLayout;
