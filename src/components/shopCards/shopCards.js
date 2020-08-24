import React from 'react'
import { Grid, Grow, Typography } from '@material-ui/core';
import useStyles from './style';
import ShopCard from '../shopCard/shopCard';


const shopCards = ( {products} ) => {

const classes = useStyles();

if(!products.length) {
    return (
        <div>
            <p>EMPTYYYY</p>
        </div>
    )
}

return (
    <div>
        <Grow in>
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {products.map((product, id) => (
                    <Grid key={id} item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
                        <ShopCard key={id} id={id} product={product} />
                    </Grid>
                ))}
            </Grid>
        </Grow>
    </div>
)


}

export default shopCards;
