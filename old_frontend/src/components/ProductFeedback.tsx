import React from "react";
import { FC } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useProductFeedback } from "./ProductFeedbackContext";
import { Typography } from "@mui/material";
import { useHistory } from "react-router-dom";

import "../css/ProductFeedback.css";
import "@fontsource/roboto/400.css";

interface CardProps {
  id: number;
  name: string;
  upvotes: string;
  comments: string;
  description: string;
  tag: string;
}

const ProductFeedbackCard: FC<CardProps> = ({
  id,
  name,
  upvotes,
  comments,
  description,
  tag,
}) => {
  const history = useHistory();

  const { upvote, downvote } = useProductFeedback();
  return (
    <Grid container className="product">
      <Grid item xs={1} alignItems="center">
        <Stack style={{ width: "64px" }}>
          <Typography variant="body1">
            <Button
              onClick={() => upvote(id)}
              style={{ minWidth: undefined }}
              variant="outlined"
              className="plus"
            >
              +
            </Button>
            <div style={{ textAlign: "center" }}>{upvotes}</div>
            <Button
              onClick={() => downvote(id)}
              variant="outlined"
              className="minus"
            >
              -
            </Button>
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={9} style={{ textAlign: "justify" }}>
        <Typography variant="body1">
          <div className="title">
            <a
              onClick={() => {
                console.log("Loading...");
                history.push("/view/" + id);
              }}
              style={{ color: "#036", textDecoration: "none" }}
            >
              {name}
            </a>
          </div>
          <div className="description"> {description} </div>
          <div className="tag"> {tag} </div>
        </Typography>
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  );
};

export default ProductFeedbackCard;
