import React from "react";

import {
  AppBar,
  Button,
  Container,
  List,
  Toolbar,
  Typography,
} from "@mui/material";
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

const Navbar = () => {
  const { cartState, favorState } = useSelector((state) => state);

  return (
    <AppBar component="nav" position="sticky">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography component="h1" variant="h5" fontWeight={700}>
            <Link to="/" style={{ color: "#fff" }}>
              کلش استور
            </Link>
          </Typography>
          <List
            sx={{ display: "flex", flex: 1, justifyContent: "space-evenly" }}
          >
            {navItems.map((item, index) => (
              <Link to={navLinks[index]} key={index} style={{ color: "#fff" }}>
                <Button variant="contained">{item}</Button>
              </Link>
            ))}
          </List>
          <Link to="/cart" style={{ color: "#fff", position: "relative" }}>
            <span style={{ position: "absolute", bottom: 0, fontWeight: 700 }}>
              {cartState.itemsCounter}
            </span>
            <LocalMallRoundedIcon fontSize="large" sx={{ ml: 1 }} />
          </Link>
          <Link to="/favorites" style={{ color: "#fff", position: "relative" }}>
            <span style={{ position: "absolute", bottom: 0, fontWeight: 700 }}>
              {favorState.itemsCounter}
            </span>
            <FavoriteRoundedIcon fontSize="large" sx={{ ml: 1 }} />
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
