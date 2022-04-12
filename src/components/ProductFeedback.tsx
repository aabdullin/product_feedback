import React from 'react';
import { FC } from 'react'
import Grid from '@mui/material/Grid';
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
      <Grid container spacing={2}> 
          <Grid item xs={1}>
            {upvotes}
          </Grid>
          <Grid item xs={8} >
            <div className='title'> {name} </div>
            <div className='description'> {description} </div>
            <div className='tag'> {tag} </div>
          </Grid>
          <Grid item xs={2}>
            {comments}
          </Grid>
      </Grid>
  );
};



export default ProductFeedbackCard;

