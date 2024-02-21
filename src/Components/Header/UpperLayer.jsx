import { Box, Typography } from "@mui/material";
import Links from "./Links";
// import HeaderImage from "./HeaderImage";

function UpperLayer() {
  return (
    <Box
      sx={{
        color: "white",
        display: "flex",
        width: "100%",
        height: "10vh",
        flexDirection: { lg: "row", xs: "column" },
        alignItems: "center",
        justifyContent: "space-around",
        paddingTop: "1vh",
        paddingLeft: " 1rem",
        paddingRight: "2rem",
        paddingBottom: "1vh",
      }}
    >
      <Box
        sx={{
          display: "flex",

          gap: { lg: "3rem", xs: "0.5rem" },
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            display: "inline-block",
            fontSize: { lg: "2.3rem", xs: "1.3rem" },
          }}
        >
          Himanshu Jangid
        </Typography>
        <Typography
          sx={{
            display: "inline-block",
            fontSize: { lg: "1.8rem", xs: "0.8rem" },
          }}
        >
          ( Web Developer )
        </Typography>
      </Box>
      {/* <HeaderImage /> */}

      <Links />
    </Box>
  );
}

export default UpperLayer;
