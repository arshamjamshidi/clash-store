import React from "react";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/cart/cartActions";
import { addFavor, removeFavor } from "../../redux/favorites/favorActions";
import { checkIncludeItem } from "../../helper/functions";

const CardItem = ({ productData }) => {
  const { cartState, favorState } = useSelector((state) => state);
  const dispatch = useDispatch();

  const { image, level, price, slug, id } = productData;
  return (
    <Card
      sx={{
        boxShadow: "0 4px 12px rgba(25, 118, 210, 0.4)",
        borderRadius: 2.5,
      }}
    >
      <CardMedia
        component="img"
        width="100%"
        height="100%"
        image={image.url}
        alt={slug}
      />
      <CardContent>
        <Typography component="p" variant="p" fontSize={13} fontWeight={800}>
          اکانت کلش اف کلنز لول {level}
        </Typography>
        <Typography component="p" variant="p" fontWeight={500} my={2}>
          قیمت {price} تومان
        </Typography>
        <Link to={`/accounts/${slug}`} style={{ color: "#1976d2" }}>
          مشاهده
        </Link>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        {checkIncludeItem(favorState, id) ? (
          <Button
            color="error"
            onClick={() => dispatch(removeFavor(productData))}
          >
            <FavoriteIcon color="error" />
          </Button>
        ) : (
          <Button color="error" onClick={() => dispatch(addFavor(productData))}>
            <FavoriteBorderIcon color="error" />
          </Button>
        )}

        {checkIncludeItem(cartState, id) ? (
          <Link to="/cart">
            <Button variant="outlined" size="small">
              مشاهده سبد خرید
            </Button>
          </Link>
        ) : (
          <Button
            variant="contained"
            size="small"
            onClick={() => dispatch(addItem(productData))}
          >
            افزودن به سبد خرید
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default CardItem;
