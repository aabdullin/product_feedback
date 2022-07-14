import "../css/Header.css";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

import { useProductFeedback } from "./ProductFeedbackContext";

const Header = () => {
  const { sortColumn, sortBy } = useProductFeedback();

  return (
    <Grid className="product_feedback" style={{ paddingTop: "2%" }}>
      <Grid item xs={1} className="text">
        Sort by :
      </Grid>
      <Grid item xl={8} className="dropdown">
        <Box sx={{ width: 200 }}>
          <FormControl fullWidth>
            <Select
              onChange={(e: SelectChangeEvent<string>) => {
                sortBy(e.target.value);
              }}
              value={sortColumn}
              style={{ color: "white" }}
            >
              <MenuItem value={"upvotes"}> Most upvotes</MenuItem>
              <MenuItem value={"comments"}>Most comments</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Grid>
      <Grid>
        <Link to="/add">
          <Button
            variant="text"
            sx={{
              width: 300,
              color: "white",
            }}
          >
            + Add Feedback
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Header;
