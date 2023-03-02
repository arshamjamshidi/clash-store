import React from "react";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/cart/cartActions";
import { removeFavor } from "../../redux/favorites/favorActions";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { checkIncludeItem } from "../../helper/functions";

// components
import TitleCreator from "../shared/TitleCreator";

const Favorites = () => {
  const navigate = useNavigate();
  const { cartState, favorState } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <Container maxWidth="lg" sx={{ my: 10 }}>
      <TitleCreator title="لیست علاقمندی ها" navigate={navigate} />

      <Grid container spacing={4}>
        {favorState.itemsCounter === 0 ? (
          <Box
            width="100%"
            height="60vh"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            gap={5}
          >
            <Typography component="p" variant="h4" fontWeight="700">
              لیست مورد علاقه شما خالی است!
            </Typography>
            <Link to="/accounts" style={{ color: "#1976d2", fontWeight: 600 }}>
              برگشت به فروشگاه
            </Link>
          </Box>
        ) : (
          favorState.selectedItems.map((item) => (
            <Grid item xs={6} sm={6} md={3} key={item.id}>
              <Card
                sx={{
                  boxShadow: "0 4px 12px rgba(25, 118, 210, 0.4)",
                  borderRadius: 2.5,
                  textAlign: "center",
                }}
              >
                <CardMedia
                  component="img"
                  width="100%"
                  height="100%"
                  image={item.image.url}
                  alt={item.slug}
                />
                <CardContent>
                  <Typography component="p" variant="p" fontWeight={700}>
                    اکانت کلش اف کلنز لول {item.level}
                  </Typography>
                  <Typography component="p" variant="p" fontWeight={700}>
                    قیمت {item.price} تومان
                  </Typography>
                  <Link
                    to={`/accounts/${item.slug}`}
                    style={{ color: "#1976d2" }}
                  >
                    مشاهده
                  </Link>
                </CardContent>
                <CardActions sx={{ justifyContent: "space-between", mb: 1 }}>
                  {checkIncludeItem(cartState, item.id) ? (
                    <Link to="/cart">
                      <Button variant="outlined" size="small">
                        مشاهده سبد خرید
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      variant="contained"
                      color="success"
                      size="small"
                      onClick={() => dispatch(addItem(item))}
                    >
                      افزودن به سبد خرید
                    </Button>
                  )}

                  <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    onClick={() => dispatch(removeFavor(item))}
                  >
                    حذف از موردعلاقه ها
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
};

export default Favorites;
