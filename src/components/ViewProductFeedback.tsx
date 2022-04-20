import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useProductFeedback } from "./ProductFeedbackContext";


function ViewProductFeedback() {
  const { items } = useProductFeedback();

  return (
    <div className="userListing">
      <Link to="/add">
        <button>+ Product Feedback</button>
      </Link>
      <h2>Feedback Listing</h2>
      <ul>
        {items.map((u, i) => {
          return (
            <li key={i}>
              {u.id}) {u.name} = <Link to={`/edit/${u.id}`}>Edit</Link>{" "}
              <Link to={`/delete/${u.id}`}>Delete</Link>{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ViewProductFeedback;
