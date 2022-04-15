import React from 'react';
import { FC } from 'react'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useProductFeedback } from "./ProductFeedbackContext";

import "../css/ProductFeedback.css"
import '@fontsource/roboto/400.css';

interface CardProps {
  id: number,
  name: string,
  upvotes: string,
  comments: string,
  description: string,
  tag: string
}

const ProductFeedbackCard: FC<CardProps> = ({id, name, upvotes, comments, description, tag}) => {
  const { upvote, downvote } = useProductFeedback();
  return (
      <Grid container> 
          <Grid item xs={3} alignItems="center">
            <Stack style={{width: '64px'}}>
              <Button onClick={() => upvote(id) } style={{ minWidth: undefined }} variant="outlined" className='description'>+</Button>
              <div style={{ textAlign: 'center' }}>{upvotes}</div>
              <Button onClick={() => downvote(id) }variant="outlined" className='description'>-</Button>
            </Stack>               
          </Grid>
          <Grid item xs={7} >
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

