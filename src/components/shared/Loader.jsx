import React from "react";

import { Container } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const Loader = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{ height: "90vh", display: "grid", placeItems: "center" }}
    >
      <CircularProgress />
    </Container>
  );
};

export default Loader;
