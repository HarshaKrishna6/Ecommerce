import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import { Link, useHistory } from 'react-router-dom';

import useStyles from './styles';

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();
  const history = useHistory();

  const handleAddToCart = () => {
    onAddToCart(product.id, 1);
    localStorage.setItem("product",JSON.stringify(product));
    history.push("/product")
  }
 
    

  return (
    <Card className={classes.root} >
      <div component={Link} onClick = {handleAddToCart} style = {{cursor: 'pointer'}}>
      <CardMedia className={classes.media} image={product.media.source} title={product.name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            ${product.price.formatted}
          </Typography>
        </div>
        <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" component="p" />
      </CardContent>
      {/* <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
       
        </IconButton>
      </CardActions> */}
      </div>
    </Card>
  );
};

export default Product;

