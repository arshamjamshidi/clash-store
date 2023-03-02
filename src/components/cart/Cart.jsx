import React from "react";

import {
  Container,
  Grid,
  Typography,
  Box,
  List,
  ListItem,
  Button,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { checkout, clear } from "../../redux/cart/cartActions";

// components
import CartItem from "./CartItem";
import TitleCreator from "../shared/TitleCreator";

const Cart = () => {
  const { cartState } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ my: 10 }}>
      <TitleCreator title="سبد خرید" navigate={navigate} />

      <Grid container spacing={2} my={0}>
        <Grid item xs={12} md={9} order={{ xs: 1, md: 0 }}>
          {cartState.itemsCounter === 0 && (
            <Box
              height={300}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              gap={5}
            >
              <Typography
                component="p"
                variant="h4"
                fontWeight="700"
                color={cartState.checkout ? "success.light" : "error"}
              >
                {cartState.checkout
                  ? "پرداخت شما با موفقیت انجام شد."
                  : "سبد خرید شما خالی است!"}
              </Typography>
              <Link
                to="/accounts"
                style={{ color: "#1976d2", fontWeight: 600 }}
              >
                برگشت به فروشگاه
              </Link>
            </Box>
          )}

          {cartState.itemsCounter > 0 &&
            cartState.selectedItems.map((item) => (
              <CartItem key={item.id} productData={item} />
            ))}
        </Grid>
        {cartState.itemsCounter > 0 && (
          <Grid item xs={12} md={3} order={{ xs: 0, md: 1 }}>
            <List
              sx={{
                border: "1px solid #42a5f5",
                borderRadius: 2,
                minHeight: 250,
              }}
            >
              <ListItem
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <span
                  style={{ color: "#1565c0", fontSize: 15, fontWeight: 600 }}
                >
                  تعداد آیتم ها
                </span>
                <span style={{ fontWeight: 500, fontSize: 14 }}>
                  {cartState.itemsCounter} عدد
                </span>
              </ListItem>
              <ListItem
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <span
                  style={{ color: "#1565c0", fontSize: 15, fontWeight: 600 }}
                >
                  جمع قیمت
                </span>
                <span style={{ fontWeight: 500, fontSize: 14 }}>
                  {cartState.total} تومان
                </span>
              </ListItem>
              <ListItem
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <span
                  style={{ color: "#1565c0", fontSize: 15, fontWeight: 600 }}
                >
                  حق کمیسیون
                </span>
                <span style={{ fontWeight: 500, fontSize: 14 }}>
                  25000 تومان
                </span>
              </ListItem>
              <ListItem
                sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
              >
                <span
                  style={{ color: "#1565c0", fontSize: 17, fontWeight: 700 }}
                >
                  مجموع پرداخت
                </span>
                <span style={{ fontWeight: 600 }}>
                  {cartState.total + 25000} تومان
                </span>
              </ListItem>
              <ListItem
                sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}
              >
                <Button
                  variant="outlined"
                  color="error"
                  size="small"
                  onClick={() => dispatch(clear())}
                >
                  پاک کردن سبد خرید
                </Button>
                <Button
                  variant="contained"
                  color="success"
                  size="small"
                  onClick={() => dispatch(checkout())}
                >
                  تسویه حساب
                </Button>
              </ListItem>
            </List>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default Cart;
