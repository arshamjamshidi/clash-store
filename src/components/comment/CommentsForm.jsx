import React, { useState } from "react";

import { useMutation } from "@apollo/client";
import { CREATE_COMMENT } from "../../graphql/mutations";
import { Grid, Typography, TextField, Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CommentsForm = ({ slug }) => {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    text: "",
  });
  const [pressed, setPressed] = useState(false);

  const [sendComment, { loading, data }] = useMutation(CREATE_COMMENT, {
    variables: { name: info.name, email: info.email, text: info.text, slug },
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  if (data && pressed) {
    toast.success("کامنت شما ارسال شد و منتظر تایید میباشد", {
      position: "top-center",
    });
    setPressed(false);
  }

  const sendHandler = () => {
    if (info.name && info.email && info.text) {
      sendComment();
      setPressed(true);
    } else {
      toast.warn("تمام فیلد ها را پر کنید", {
        position: "top-center",
      });
    }
  };

  return (
    <Grid
      container
      sx={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", borderRadius: 4 }}
      py={1}
      mt={4}
    >
      <Grid item xs={12} m={2}>
        <Typography
          components="p"
          variant="h6"
          fontWeight={700}
          color="primary"
        >
          ارسال کامنت
        </Typography>
      </Grid>

      <Grid item xs={12} m={2}>
        <TextField
          label="نام کاربری"
          variant="outlined"
          size="small"
          name="name"
          fullWidth
          onInput={inputHandler}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          label="ایمیل"
          variant="outlined"
          size="small"
          name="email"
          fullWidth
          onInput={inputHandler}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          label="متن کامنت"
          variant="outlined"
          size="small"
          name="text"
          fullWidth
          multiline
          minRows={3}
          onInput={inputHandler}
        />
      </Grid>

      <Grid item xs={12} m={2}>
        {loading ? (
          <Button variant="outlined" size="small" disabled>
            درحال ارسال
          </Button>
        ) : (
          <Button variant="contained" size="small" onClick={sendHandler}>
            ارسال
          </Button>
        )}
      </Grid>
      <ToastContainer />
    </Grid>
  );
};

export default CommentsForm;
