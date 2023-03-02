import React from "react";

import { Box, Typography, Button, Divider } from "@mui/material";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";

const TitleCreator = ({ title, navigate }) => {
  return (
    <>
      <Box display="flex" justifyContent="space-between" mb={3}>
        <Typography component="p" variant="h6" fontWeight={700} fontSize={24}>
          {title}
        </Typography>
        <Button onClick={() => navigate(-1)}>
          <ArrowBackIosRoundedIcon />
        </Button>
      </Box>
      <Divider sx={{ mb: 5 }} />
    </>
  );
};

export default TitleCreator;
