import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Fab from '@mui/material/Fab';
import FavoriteIcon from '@mui/icons-material/Favorite';

import img from '../img/mobile.png'

const ProductCard = (props: { productName: string, productDescription: string }) => {
  return (
      <Card sx={{ maxWidth: 265, maxHeight: 600 }}>
          <IconButton aria-label="add to favorites"  className='float-right'>
            <FavoriteIcon />
          </IconButton>
          <CardMedia
            component="img"
            height="140"
            image={img}
            alt="green iguana"
            sx={{ height: 250 }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.productName}
            </Typography>
            <Typography variant="body2" color="text.secondary">

              {props.productDescription}
            </Typography>
          </CardContent>
        <CardActions>

          <Button variant="outlined" sx={{ borderRadius: '40px' }}> Add to cart</Button>
        </CardActions>
      </Card>
  )
}

export default ProductCard
