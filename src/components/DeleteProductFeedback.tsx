import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useProductFeedback } from "./ProductFeedbackContext";



function DeleteProductFeedback() {
  const history = useHistory();
  const id = useParams();
  const { items, deleteItem } = useProductFeedback();

  useEffect(() => {
    const currentUser = items.find((u) => u.id === Number(id));
    if (!currentUser) {
      history.push("/");
      return;
    }
  }, []);

  return (
    <button
      value="Delete"
      onClick={() => {
        deleteItem(Number(id));
        history.push("/");
      }}
    />
  );
}

export default DeleteProductFeedback;
