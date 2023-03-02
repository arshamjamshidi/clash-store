import React from "react";

import { Container } from "@mui/material";
import Loader from "./Loader";

const Temporary = () => {
  return (
    <Container maxWidth="lg" sx={{ height: "90vh", textAlign: "center" }}>
      <Loader />
      این صفحه درحال پیاده سازی است...
    </Container>
  );
};

export default Temporary;
