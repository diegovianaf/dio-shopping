import React from 'react'
import { Paper, Grid, Typography, Button} from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import cartActions from './Store/actions/cart'

const Card = ({ product, children }) => {
  const cart = useSelector( state => state.cart.value )
  const dispatch = useDispatch()

  return (
    <Grid item xs={3} flexWrap={'wrap'}>
      <Paper>
        <Grid
          container
          direction='column'
          alignItems='center'
          padding={2}
        >
          <Grid item>
            <img width="140px" src={product.image} alt={product.name_product}/>
            <Typography variant='h6'>
              {children}
            </Typography>
            <Typography variant='subtitle1' textAlign='center'>
              R$ {product.price.toFixed(2)}
            </Typography>
          </Grid>
          <Button 
            variant='contained'
            onClick={() => dispatch(cartActions.Add(cart, product))}
          >
            Adicionar
          </Button>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default Card
