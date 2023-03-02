import React from "react";

import { useQuery } from "@apollo/client";
import { Grid, Typography, Box, Avatar } from "@mui/material";
import { GET_COMMENTS } from "../../graphql/queries";

// components
import Loader from "../shared/Loader";

const Comments = ({ slug }) => {
  const { loading, data, error } = useQuery(GET_COMMENTS, {
    variables: { slug },
  });

  if (loading) return <Loader />;
  if (error) return <h1>خطا رخ داده است</h1>;
  return (
    <Grid
      container
      sx={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", borderRadius: 4 }}
      py={1}
      mt={5}
    >
      <Grid item xs={12} m={2}>
        <Typography component="p" variant="h6" fontWeight={700} color="primary">
          کامنت ها
        </Typography>
        {data.comments.map((comment) => (
          <Grid
            item
            xs={12}
            m={2}
            p={2}
            border="1px solid silver"
            borderRadius={4}
            key={comment.id}
          >
            <Box component="div" display="flex" alignItems="center" gap={1} mb={3}>
              <Avatar>{comment.name[0]}</Avatar>
              <Typography component="span" variant="p" fontWeight={700} mr={2}>
                {comment.name}
              </Typography>
            </Box>
            <Typography component="p" variant="p">
              {comment.text}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Comments;
