import React, { useState } from "react";
import "../css/AddUserFeedback.css";
import { Link, useHistory } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useProductFeedback } from "./ProductFeedbackContext";

const AddProductFeedback = () => {
  const { addItem } = useProductFeedback();
  const history = useHistory();
  const [name, setName] = useState("");
  const [value, setValue] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <label>
        Product Feedback:
        <input
          className="form"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <TextField
        id="outlined-multiline-flexible"
        multiline
        maxRows={4}
        value={value}
        onChange={handleChange}
      ></TextField>

      <div>
        <Link to="/">
          <button>Cancel</button>
        </Link>
        <input
          type="submit"
          value="Submit"
          onClick={() => {
            addItem(name, value);
            history.push("/");
          }}
        />
      </div>
    </Box>
  );
};

export default AddProductFeedback;
