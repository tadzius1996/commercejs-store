import React, {useRef} from 'react'
import {Grid} from '@material-ui/core'
import Product from './Product/Product'
import useStyles from './styles'
import Hero from '../Hero/Hero'

const Products = ({products, onAddToCart}) => {
    const classes = useStyles();
    const ref = useRef(null)
  return (
    <>
    <Hero ref={ref}/>
    <main className={classes.content}>
      <div className={classes.toolbar} />
        <Grid container justify='center' spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} onAddToCart={onAddToCart}/>
                </Grid>
            ))}

        </Grid>
    </main>
    </>
  )
}

export default Products