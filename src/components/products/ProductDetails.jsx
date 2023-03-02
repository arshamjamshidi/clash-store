import React from "react";

import {
  Container,
  Grid,
  Typography,
  Button,
  List,
  ListItem,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT } from "../../graphql/queries";
import { checkIncludeItem } from "../../helper/functions";
import { addItem } from "../../redux/cart/cartActions";
import { addFavor, removeFavor } from "../../redux/favorites/favorActions";

// components
import Loader from "../shared/Loader";
import TitleCreator from "../shared/TitleCreator";
import CommentsForm from "../comment/CommentsForm";
import Comments from "../comment/Comments";
import { useDispatch, useSelector } from "react-redux";

const ProductDetails = () => {
  const { slug } = useParams();
  const { loading, data, error } = useQuery(GET_PRODUCT, {
    variables: { slug },
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartState, favorState } = useSelector((state) => state);

  if (loading) return <Loader />;
  if (error)
    return (
      <Container maxWidth="lg" sx={{ textAlign: "center", height: "90vh" }}>
        خطا رخ داده است!
      </Container>
    );
  const {
    id,
    changeName,
    datePublished,
    description,
    gem,
    heroSkinCount,
    image,
    level,
    name,
    price,
    supercellId,
  } = data.product;
  return (
    <Container maxWidth="lg" sx={{ my: 10 }}>
      <Grid container spacing={8}>
        <Grid item xs={12} md={4}>
          <img
            src={image.url}
            alt={slug}
            width="100%"
            style={{ borderRadius: "15px" }}
          />
          <Typography
            component="p"
            variant="p"
            fontWeight={700}
            fontSize={22}
            color="success.light"
            textAlign="center"
            mt={1}
          >
            قیمت : {price} تومان
          </Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <TitleCreator
            title={`اکانت کلش اف کلنز لول ${level}`}
            navigate={navigate}
          />

          <List
            sx={{
              border: "1px solid silver",
              borderRadius: 2,
              fontSize: 14,
              fontWeight: 500,
            }}
          >
            <ListItem>
              <Typography
                component="span"
                variant="span"
                color="primary"
                fontWeight={700}
                mr={1}
              >
                نام اکانت :
              </Typography>
              {name}
            </ListItem>
            <ListItem>
              <Typography
                component="span"
                variant="span"
                color="primary"
                fontWeight={700}
                mr={1}
              >
                لول :
              </Typography>
              {level}
            </ListItem>
            <ListItem>
              <Typography
                component="span"
                variant="span"
                color="primary"
                fontWeight={700}
                mr={1}
              >
                تعداد جم :
              </Typography>
              {gem}
            </ListItem>
            <ListItem>
              <Typography
                component="span"
                variant="span"
                color="primary"
                fontWeight={700}
                mr={1}
              >
                تغییر نام :
              </Typography>
              {changeName}
            </ListItem>
            <ListItem>
              <Typography
                component="span"
                variant="span"
                color="primary"
                fontWeight={700}
                mr={1}
              >
                سوپرسل آیدی :
              </Typography>
              {supercellId}
            </ListItem>
            <ListItem>
              <Typography
                component="span"
                variant="span"
                color="primary"
                fontWeight={700}
                mr={1}
              >
                تعداد اسکین هیروها :
              </Typography>
              {heroSkinCount}
            </ListItem>
            <ListItem>
              <Typography
                component="span"
                variant="span"
                color="primary"
                fontWeight={700}
                mr={1}
              >
                تاریخ ثبت :
              </Typography>
              {datePublished}
            </ListItem>
            <ListItem>
              <Typography
                component="span"
                variant="span"
                color="primary"
                fontWeight={700}
                mr={1}
              >
                توضیحات :
              </Typography>
              {description}
            </ListItem>
            <ListItem sx={{ gap: 2 }}>
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
                  onClick={() =>
                    dispatch(addItem({ image, level, price, slug, id }))
                  }
                >
                  افزودن به سبد خرید
                </Button>
              )}
              {checkIncludeItem(favorState, id) ? (
                <Button
                  color="error"
                  onClick={() =>
                    dispatch(removeFavor({ image, level, price, slug, id }))
                  }
                >
                  <FavoriteIcon color="error" />
                </Button>
              ) : (
                <Button
                  color="error"
                  onClick={() =>
                    dispatch(addFavor({ image, level, price, slug, id }))
                  }
                >
                  <FavoriteBorderIcon color="error" />
                </Button>
              )}
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12}>
          <CommentsForm slug={slug} />
        </Grid>
        <Grid item xs={12}>
          <Comments slug={slug} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetails;
