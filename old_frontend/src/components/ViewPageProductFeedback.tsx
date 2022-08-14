import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useProductFeedback } from "./ProductFeedbackContext";
import ProductFeedbackCard from "./ProductFeedback";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "../css/ProductFeedbackViewPage.css";

function ProductFeedbackViewPage() {
  const history = useHistory();
  const params = useParams<{ id: string }>();
  const { items, addComment } = useProductFeedback();
  const [comments, setComments] = useState("");
  const item = items.find((i) => i.id === Number(params.id));

  useEffect(() => {
    setComments("");
  }, [items]);

  console.log(item);
  console.log(items);
  if (item === undefined) {
    return null;
  }

  return (
    <>
      <Button
        variant="text"
        style={{
          textTransform: "none",
          width: 80,
        }}
        onClick={() => {
          addComment(item.id, comments);
        }}
      >
        Edit
      </Button>
      <div className="card">
        <ProductFeedbackCard
          id={item.id}
          name={item.name}
          upvotes={item.upvotes}
          comments={item.comments[0].comment}
          description={item.description}
          tag={item.tag}
        ></ProductFeedbackCard>
      </div>
      <div
        style={{
          border: "1px solid #036",
          borderRadius: "5px",
          margin: "10px",
          padding: "10px",
        }}
      >
        {item.comments.map((comment) => (
          <div className="comment">
            {comment.author.name}
            <br />
            {comment.author.username}
            <br />
            {comment.comment}
          </div>
        ))}
      </div>
      <div
        style={{
          border: "1px solid #036",
          borderRadius: "5px",
          margin: "10px",
          padding: "10px",
        }}
      >
        <TextField
          id="filled-multiline-flexible"
          label="Type"
          multiline
          maxRows={4}
          value={comments}
          onChange={(e) => {
            setComments(e.target.value);
          }}
        ></TextField>

        <br />
        <Button
          variant="text"
          style={{
            textTransform: "none",
            width: 80,
          }}
          onClick={() => {
            addComment(item.id, comments);
          }}
        >
          Submit
        </Button>
      </div>
    </>
  );
}

export default ProductFeedbackViewPage;
