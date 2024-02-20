import { Box, Typography } from "@mui/material";
import Links from "./Links";
// import HeaderImage from "./HeaderImage";

function UpperLayer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { lg: "row", xs: "column" },
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: "0.5rem",
        paddingLeft: " 1rem",
        paddingRight: "2rem",
        paddingBottom: "0.5rem",
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
