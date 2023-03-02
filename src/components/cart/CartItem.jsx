import React from "react";

import {
  Grid,
  Button,
  Typography,
  List,
  ListItem,
  Divider,
} from "@mui/material";
import { removeItem } from "../../redux/cart/cartActions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const CartItem = ({ productData }) => {
  const dispatch = useDispatch();
  const { image, level, price, slug } = productData;

  return (
    <Grid container my={4} columnSpacing={2}>
      <Grid item xs={12} sm={6} md={3}>
        <img src={image.url} alt={slug} width="100%" />
      </Grid>
      <Grid item xs={12} sm={6} md={9}>
        <List>
          <ListItem>
            <Typography
              component="p"
              variant="p"
              fontSize={18}
              fontWeight={600}
            >
              اکانت کلش اف کلنز لول {level}
            </Typography>
          </ListItem>
          <ListItem>
            <Typography
              component="p"
              variant="p"
              fontSize={18}
              fontWeight={600}
            >
              قیمت محصول : {price} تومان
            </Typography>
          </ListItem>
          <ListItem sx={{ alignItems: "center", gap: 2 }}>
            <Link to={`/accounts/${slug}`} style={{ color: "#1976d2" }}>
              مشاهده
            </Link>
            <Button
              variant="outlined"
              color="error"
              size="small"
              onClick={() => dispatch(removeItem(productData))}
            >
              حذف از سبد خرید
            </Button>
          </ListItem>
        </List>
        <Divider sx={{ mt: 3 }} />
      </Grid>
    </Grid>
  );
};

export default CartItem;
