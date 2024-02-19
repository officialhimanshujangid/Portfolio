import { Box, Typography } from "@mui/material";
import Links from "./Links";

function UpperLayer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { lg: "row", xs: "column" },
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: { lg: "0.5rem", xs: "3rem" },
        paddingLeft: " 1rem",
        paddingRight: "1rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { lg: "row", xs: "column" },
          gap: { lg: "3rem", xs: "0rem" },
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            display: "inline-block",
            fontSize: { lg: "2rem", xs: "1.8rem" },
          }}
        >
          Himanshu Jangid
        </Typography>
        <Typography
          sx={{
            display: "inline-block",
            fontSize: { lg: "1.5rem", xs: "1.2rem" },
          }}
        >
          Web Developer
        </Typography>
      </Box>

      <Links />
    </Box>
  );
}

export default UpperLayer;
