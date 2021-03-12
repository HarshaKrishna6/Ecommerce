import React, { useState, useEffect } from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia,IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './styles';

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart,onAddToCart }) => {
  const classes = useStyles();
  const [product, setProduct] = useState({});

  useEffect(() => {
  const product = localStorage.getItem("surveyEndDate")
  setProduct(product);
  console.log(product,"product id")
  }, []);

  const handleUpdateCartQty = (lineItemId, newQuantity) => onUpdateCartQty(lineItemId, newQuantity);



  return (
    <Card className="cart-item">
      <CardMedia image={item.media.source} alt={item.name} className={classes.media} />
      <CardContent className={classes.cardContent}>
        <Typography variant="h4">{item.name}</Typography>
        <Typography variant="h5">{item.line_total.formatted_with_symbol}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
          <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
          <Button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
        </div>
      </CardActions>
    </Card>
  );
};

export default CartItem;
