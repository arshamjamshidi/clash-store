import React from "react";

import { Container, Typography } from "@mui/material";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../../graphql/queries";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import { Link } from "react-router-dom";

// components
import CardItem from "../shared/CardItem";
import Loader from "../shared/Loader";

import "swiper/css";
import "swiper/css/navigation";

const ProductsSlider = () => {
  const { loading, data, error } = useQuery(GET_PRODUCTS);

  if (loading) return <Loader />;
  if (error)
    return (
      <Container maxWidth="lg" sx={{ textAlign: "center", height: "90vh" }}>
        خطا رخ داده است!
      </Container>
    );
  return (
    <Container maxWidth="lg">
      <Typography component="p" variant="p" fontWeight={600} textAlign="center">
        <Link to="/accounts" style={{ color: "#1976d2" }}>
          مشاهده همه
        </Link>
      </Typography>
      <Swiper
        dir="rtl"
        navigation={true}
        modules={[Autoplay, Navigation]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          500: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        style={{ height: 400, padding: "40px 20px 0" }}
      >
        {data.products.map((product) => (
          <SwiperSlide key={product.id}>
            <CardItem productData={{ ...product }} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default ProductsSlider;
