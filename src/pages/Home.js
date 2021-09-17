import React from "react";
import { Typography } from "@mui/material";
import FetchTemp from "../components/FetchTemp";
import LoadingButton from "../components/LoadingButton";

export default function Home() {
  return (
    <div>
      <Typography variant="h3" color="#ff8c00" aline="center">
        Gture Del 2
      </Typography>

      <LoadingButton />

      <FetchTemp />
    </div>
  );
}
