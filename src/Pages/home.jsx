import React from 'react'
import { useSelector } from 'react-redux'
import { Paper, Grid, Typography, List } from '@mui/material'
import Card from '../Components/Card'
import Item from '../Components/Item'

const HomePage = () => {
  const products = useSelector((state) => state.products)

  const categories = products.map(
    category => {
      const container = { }
      container['id'] = category.id_categories
      container['name'] = category.name_categories
      return container
    }
  )

  const category = categories.map(JSON.stringify)
    .filter(function(item, index, arr) {
      return arr.indexOf(item, index + 1) === -1
    })
    .map(JSON.parse)

  const arrayCategory = categories.map((category) => category.name)

  let count = { }

  for (let i = 0; i < arrayCategory.length; i++) {
    let key = arrayCategory[i]
    count[key] = (count[key] ? count[key] + 1 : 1)
  }

  return (
    <Grid container spacing={3} textAlign='center'>
      <Grid item xs={3}>
        <Paper style={{padding: 16}}>
          <Typography variant='h5'>
            Categorias
          </Typography>
          <List>
            {category.map((category) => {
              return (
                <Item
                  key = {category.id} 
                  name= {category.name}
                  details={count[category.name]}
                />
              )
            })}
          </List>
        </Paper>
      </Grid>
      <Grid item container xs={9} spacing={3}>
        {products.map((item) => {
          return (
            <Card
              key={item.id_product}
              product={item}
            >
              {item.name_product}
            </Card>
          )
        })}
      </Grid>
    </Grid>
  )
}

export default HomePage
