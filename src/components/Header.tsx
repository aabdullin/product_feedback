import { useState, useEffect, createContext, useContext, } from 'react';
import "../css/Header.css"
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import Select,  { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";



import { useProductFeedback } from './ProductFeedbackContext';


const Header = () => {
    const { sortColumn, sortBy } = useProductFeedback();

    return (
        <Grid className='product_feedback'>
            <Grid item xs={1} className="text">
                Sort by :
            </Grid>
            <Grid item xl={8} className="dropdown">
                <Box sx={{ width: 200 }}>
                    <FormControl fullWidth>
                        <Select
                            onChange={(e: SelectChangeEvent<string>) => { sortBy(e.target.value) }}
                            value={sortColumn}
                        >
                            <MenuItem value={"upvotes"}>Most upvotes</MenuItem>
                            <MenuItem value={"comments"}>Most comments</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Grid>
            <Link to="/add">
                <Button variant="text" className='add_feedback-btn'>+ Add Feedback</Button>
            </Link>
        </Grid>
    );
  };


export default Header;