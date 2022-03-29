import React from 'react';
import { useState, useEffect, createContext, useContext, } from 'react';
import "../css/Header.css"
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

import { useProductFeedback } from './ProductFeedbackContext';


const Header = () => {
    const { sortBy } = useProductFeedback();

    return (
        <div className='product_feedback'>
            <div className="text">
                Suggestions <br/>
            </div>
            <div className="text">
                Sort by :
            </div>
            <div className="dropdown">
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>

                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                        onChange={(e) => { sortBy(e.target.value) }}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                        {/* <option value="upvotes">Most upvotes</option>
                        <option value="comments">Most comments</option> */}
                    </Select>
                </FormControl>

            </Box>

            </div>
            <Button variant="text" className='add_feedback-btn'>+ Add Feedback</Button>
        </div>
    );
  };


export default Header;