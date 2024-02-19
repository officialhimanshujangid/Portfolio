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
        paddingTop: { lg: "0.5rem", xs: "2.5rem" },
        paddingLeft: " 1rem",
        paddingRight: "1rem",
      }}
    >
      <Box
        sx={{
          display: "flex",

          gap: { lg: "3rem", xs: "0.8rem" },
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            display: "inline-block",
            fontSize: { lg: "2rem", xs: "1.2rem" },
          }}
        >
          Himanshu Jangid
        </Typography>
        <Typography
          sx={{
            display: "inline-block",
            fontSize: { lg: "1.5rem", xs: "1rem" },
          }}
        >
          ( Web Developer )
        </Typography>
      </Box>

      <Links />
    </Box>
  );
}

export default UpperLayer;
