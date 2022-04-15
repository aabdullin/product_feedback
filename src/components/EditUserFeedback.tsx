import React, { useState, useEffect } from "react";
import "./index.css";
import { Link, useHistory, useParams } from "react-router-dom";
import { useProductFeedback } from "./ProductFeedbackContext";


function EditUser() {
  const { editItem, items } = useProductFeedback()
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const id = useParams();


  useEffect(() => {
    const currentFeedback = items.find((u) => u.id === Number(id));
    if (!currentFeedback) {
      history.push("/");
      return;
    }
    setName(currentFeedback.name);
  }, []);

  return (
    <div className="form">
      <label className="inputs">
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <Link to="/">
        <button>Cancel</button>
      </Link>
      <input
        type="submit"
        value="Submit"
        onClick={() => {
          editItem(
            Number(id),
            name
          );
          history.push("/");
        }}
      />
    </div>
  );
}

export default EditUser;
