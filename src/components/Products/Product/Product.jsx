import React from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core'; 
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './styles';
import { Link } from 'react-router-dom'


const Product = ({product, onAddToCart}) => {
    const classes = useStyles()

    const handleAddToCart = () => onAddToCart(product.id, 1);
   console.log(product)
   
  return (
    <Card className={classes.root}>
        <CardMedia className={classes.media} image={product.image.url} title={product.name} />
        <CardContent>
            <div className={classes.CardContent}>
            <Typography variant='h5' gutterBottom>
                {product.name}
            </Typography>
            <Typography variant='h5'>
                {product.price.formatted_with_symbol}
            </Typography>
            </div>
            <Typography dangerouslySetInnerHTML={{__html: product.description}} variant='body2' color='textSecondary'/>
        </CardContent>
        <CardActions>
            <IconButton onClick={handleAddToCart}>
                <AddShoppingCart/>
            </IconButton>
        </CardActions>
    </Card>
  )
}

export default Product