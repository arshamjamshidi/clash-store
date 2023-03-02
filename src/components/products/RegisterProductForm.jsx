import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { CREATE_PRODUCT } from "../../graphql/mutations";
import {
  Container,
  Button,
  Grid,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import TitleCreator from "../shared/TitleCreator";
import { ToastContainer, toast } from "react-toastify";

const RegisterProductForm = () => {
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    name: "",
    level: "",
    gem: "",
    heroSkinCount: "",
    changeName: "",
    supercellId: "",
    price: "",
    description: "",
    fileName: "",
    handle: "",
  });
  const [pressed, setPressed] = useState(false);
  const [sendProduct, { data }] = useMutation(CREATE_PRODUCT, {
    variables: {
      name: info.name,
      level: info.level,
      gem: info.gem,
      heroSkinCount: info.heroSkinCount,
      changeName: info.changeName,
      supercellId: info.supercellId,
      price: info.price,
      slug: `clash-of-clans-${info.level}-${info.level * 55}`,
      description: info.description,
      fileName: info.fileName,
      handle: info.handle,
    },
  });

  const inputHandler = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    setInfo({
      ...info,
      [name]: value,
      handle: `#a0r9gh${info.name}${info.level * 999}qw1r`,
    });
  };

  const fileInputHandler = (e) => {
    const fileName = e.target.files[0].name;
    setInfo({ ...info, fileName });
  };

  if (data && pressed) {
    toast.success("کامنت شما ارسال شد و منتظر تایید میباشد", {
      position: "top-center",
    });
    setPressed(false);
  }

  const submitHandler = () => {
    if (info) {
      sendProduct();
      setPressed(true);
    } else {
      toast.warn("تمام فیلد ها را پر کنید", {
        position: "top-center",
      });
    }
  };

  return (
    <Container maxWidth="lg" sx={{ my: 10, mb: 17 }}>
      <TitleCreator title="ثبت آگهی رایگان کلش اف کلنز" navigate={navigate} />

      <Grid container spacing={3} mb={2}>
        <Grid item xs={6} md={3}>
          <TextField
            label="نام اکانت"
            variant="outlined"
            size="small"
            fullWidth
            name="name"
            value={info.name}
            onChange={inputHandler}
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <TextField
            type="number"
            label="لول"
            variant="outlined"
            size="small"
            fullWidth
            name="level"
            value={info.level}
            onChange={inputHandler}
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <TextField
            type="number"
            label="تعداد جم"
            variant="outlined"
            size="small"
            fullWidth
            name="gem"
            value={info.gem}
            onChange={inputHandler}
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <TextField
            type="number"
            label="تعداد اسکین هیروها"
            variant="outlined"
            size="small"
            fullWidth
            name="heroSkinCount"
            value={info.heroSkinCount}
            onChange={inputHandler}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={6} md={3}>
          <FormControl fullWidth>
            <InputLabel id="demo-select">قابلیت تغییر نام</InputLabel>
            <Select
              size="small"
              labelId="demo-select"
              id="demo-select"
              label="قابلیت تغییر نام"
              name="changeName"
              value={info.changeName}
              onChange={inputHandler}
            >
              <MenuItem value="رایگان">رایگان</MenuItem>
              <MenuItem value="با 500 جم ">با 500 جم</MenuItem>
              <MenuItem value="با 1000 جم ">با 1000 جم</MenuItem>
              <MenuItem value="با 1500 جم ">با 1500 جم</MenuItem>
              <MenuItem value="با 2000 جم ">با 2000 جم</MenuItem>
              <MenuItem value="با 2500 جم ">با 2500 جم</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6} md={3}>
          <FormControl fullWidth>
            <InputLabel id="demo-select">سوپرسل آیدی</InputLabel>
            <Select
              size="small"
              labelId="demo-select"
              label="سوپرسل ایدی"
              name="supercellId"
              value={info.supercellId}
              onChange={inputHandler}
            >
              <MenuItem value="متصل شده">متصل شده</MenuItem>
              <MenuItem value="متصل نشده">متصل نشده</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            size="small"
            label="قیمت به تومان"
            fullWidth
            name="price"
            value={info.price}
            onChange={inputHandler}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            size="small"
            label="عکس اکانت"
            type="file"
            fullWidth
            onChange={fileInputHandler}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            size="small"
            label="توضیحات"
            multiline
            maxRows={4}
            fullWidth
            name="description"
            value={info.description}
            onChange={inputHandler}
          />
        </Grid>

        <Button
          variant="contained"
          sx={{ my: 2 }}
          onClick={submitHandler}
          disabled
        >
          ثبت آگهی
        </Button>
      </Grid>
      <ToastContainer />
    </Container>
  );
};

export default RegisterProductForm;
