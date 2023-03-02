import React from "react";

import { Container, Grid, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import headerImage from "../../image/header.png";

const Header = () => {
  return (
    <Container maxWidth="lg" sx={{ my: 10 }}>
      <Grid container>
        <Grid
          order={{ xs: 1, md: 0 }}
          item
          xs={12}
          md={6}
          mb={10}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          gap="24px"
        >
          <Typography
            component="h3"
            variant="h4"
            fontWeight={700}
            textAlign="center"
            px={9}
          >
            خرید و فروش آسان اکانت های کلش آف کلنز
          </Typography>
          <Box textAlign="center">
            <Button variant="contained" sx={{ mx: 1 }}>
              <Link to="/register-account" style={{ color: "#fff" }}>
                ثبت آگهی رایگان
              </Link>
            </Button>
            <Button variant="contained" sx={{ mx: 1 }}>
              <Link to="/accounts" style={{ color: "#fff" }}>
                خرید اکانت سریع
              </Link>
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={headerImage} alt="header" width="100%" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;
