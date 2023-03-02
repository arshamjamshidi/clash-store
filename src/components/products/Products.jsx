import React from "react";

import { Container, Grid, Typography, Box } from "@mui/material";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../../graphql/queries";
import { useNavigate } from "react-router-dom";

// components
import TitleCreator from "../shared/TitleCreator";
import CardItem from "../shared/CardItem";
import Loader from "../shared/Loader";

const Products = () => {
  const { loading, data, error } = useQuery(GET_PRODUCTS);
  const navigate = useNavigate();

  if (loading) return <Loader />;
  if (error)
    return (
      <Container maxWidth="lg" sx={{ textAlign: "center", height: "90vh" }}>
        خطا رخ داده است!
      </Container>
    );
  return (
    <Container maxWidth="lg" sx={{ my: 10 }}>
      <TitleCreator title="اکانت های کلش اف کلنز" navigate={navigate} />

      <Grid container spacing={10}>
        <Grid item xs={12} md={3}>
          <Typography component="p" variant="p" fontSize={18} fontWeight={500}>
            فیلتر کردن اکانت ها
          </Typography>
          <Box mt={2}>
            <Typography>بر اساس قیمت :</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={9}>
          <Grid container spacing={4}>
            {data.products.map((product) => (
              <Grid item xs={6} sm={4} key={product.id}>
                <CardItem productData={{ ...product }} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Products;
