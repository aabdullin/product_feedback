import React from 'react';
import { FC } from 'react'
import "../css/ProductFeedback.css"
import '@fontsource/roboto/400.css';

interface CardProps {
    name: string,
    upvotes: string,
    comments: string,
    description: string,
    tag: string
}

const ProductFeedbackCard: FC<CardProps> = ({name, upvotes, comments, description, tag}) => {
  return (
      <div className='card'>
          <div className='left-item'>
            {upvotes}
          </div>
          <div className='middle'>
            <div className='title'> {name} </div>
            <div className='description'> {description} </div>
            <div className='tag'> {tag} </div>
          </div>
          <div className='right-item'>
            {comments}
          </div>
      </div>
  );
};



export default ProductFeedbackCard;

