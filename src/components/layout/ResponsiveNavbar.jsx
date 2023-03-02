import React, { useState } from "react";

import {
  Container,
  Box,
  Drawer,
  Button,
  List,
  Typography,
  AppBar,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import LocalMallRoundedIcon from "@mui/icons-material/LocalMallRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const navItems = ["خانه", "خرید اکانت", "ثبت اگهی", "تماس با ما", "درباره ما"];
const navLinks = [
  "/",
  "accounts",
  "register-account",
  "contact-us",
  "about-us",
];

const ResponsiveNavbar = () => {
  const { cartState, favorState } = useSelector((state) => state);
  const [left, setLeft] = useState(false);

  const list = () => (
    <Box onClick={() => setLeft(false)}>
      <Typography
        component="p"
        variant="h5"
        fontWeight={700}
        textAlign="center"
        py={2}
      >
        <Link to="/" style={{ color: "#1976d2" }}>
          کلش استور
        </Link>
      </Typography>
      <List
        sx={{
          width: "35vw",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          textAlign: "center",
        }}
      >
        {navItems.map((item, index) => (
          <Link to={navLinks[index]} key={index} style={{ color: "#000" }}>
            <Button>{item}</Button>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      component="nav"
      position="sticky"
      sx={{ backgroundColor: "white", py: 1 }}
    >
      <Container maxWidth="lg">
        <Box
          component="div"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Button onClick={() => setLeft(true)}>
            <MenuRoundedIcon fontSize="large" />
          </Button>
          <Typography component="h1" variant="h6" fontWeight={700}>
            <Link to="/" style={{ color: "#1976d2" }}>
              کلش استور
            </Link>
          </Typography>
          <Box>
            <Link
              to="/cart"
              style={{ marginLeft: 10, color: "#1976d2", position: "relative" }}
            >
              <span
                style={{ position: "absolute", right: -7, fontWeight: 700 }}
              >
                {cartState.itemsCounter}
              </span>
              <LocalMallRoundedIcon fontSize="large" />
            </Link>
            <Link
              to="/favorites"
              style={{ color: "#1976d2", position: "relative" }}
            >
              <span
                style={{ position: "absolute", right: -7, fontWeight: 700 }}
              >
                {favorState.itemsCounter}
              </span>
              <FavoriteRoundedIcon fontSize="large" />
            </Link>
          </Box>
          <Drawer anchor="left" open={left} onClose={() => setLeft(false)}>
            {list("left")}
          </Drawer>
        </Box>
      </Container>
    </AppBar>
  );
};

export default ResponsiveNavbar;
