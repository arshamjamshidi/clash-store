import React from "react";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <footer>
      <Typography
        component="p"
        variant="p"
        bgcolor="#f7f7f7"
        color="primary"
        p="10px"
        textAlign="center"
        fontWeight={500}
        mt={10}
      >
        پروژه فروشگاهی با REACT-REDUX | MUI | GRAPHQL
      </Typography>
    </footer>
  );
};

export default Footer;
