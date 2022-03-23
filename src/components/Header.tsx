import React from 'react';
import { useState, useEffect, createContext, useContext, } from 'react';
import "../css/Header.css"

import { useProductFeedback } from './ProductFeedbackContext';

const Header = () => {
    const { sortBy } = useProductFeedback();

    return (
        <div className='product_feedback'>
            <div className="text">
                Suggestions
            </div>
            <div className="text">
                Sort by :
            </div>
            <div className="dropdown">
                <select
                    onChange={(e) => { sortBy(e.target.value) }}
                >
                    <option value="upvotes">Most upvotes</option>
                    <option value="comments">Most comments</option>
                </select>
            </div>
            <button className='add_feedback-btn'>+ Add Feedback</button>
        </div>
    );
  };


export default Header;