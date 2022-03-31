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
                Sort by :
            </div>
            
            <div className="dropdown">
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Most upvotes</InputLabel>
                        <Select
                            onChange={(e) => { sortBy(e.target.value as string) }}
                        >
                            <MenuItem value={10}>Most upvotes</MenuItem>
                            <MenuItem value={20}>Most comments</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                {/* <select
                    onChange={(e) => { sortBy(e.target.value) }}
                >
                    <option value="upvotes">Most upvotes</option>
                    <option value="comments">Most comments</option>
                </select> */}
            </div>

            <Button variant="text" className='add_feedback-btn'>+ Add Feedback</Button>
        </div>
    );
  };


export default Header;