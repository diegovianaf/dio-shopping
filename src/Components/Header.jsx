import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Typography, Button } from '@mui/material'
import Cart from './Cart/Cart'

const Header = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      paddingBottom={2}
      paddingTop={2}
    >
      <Typography variant='h3'>
        Dio Shopping
      </Typography>
      <Link to="/">
        <Button color="primary">Home</Button>
      </Link>
      <Link to="/contact">
        <Button color="primary">Contato</Button>
      </Link>
      <Cart />
    </Grid>
  )
}

export default Header
