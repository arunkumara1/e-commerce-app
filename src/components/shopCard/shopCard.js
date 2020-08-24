import React from 'react'
import useStyles from './style';
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from '@material-ui/core';

const shopCard = ( { product: { image, price, title, description} , id } ) => {

    const classes = useStyles();

    return(
        <div>
            <Card className={classes.card}>
                <CardActionArea >
                    <CardMedia className={classes.media} image={image || 'https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png'}
                        title={title}
                    />
                    <div className={classes.details}>
                        <Typography variant="body2" color="textSecondary" component="h2">{price}</Typography>
                        <Typography variant="body2" color="textSecondary" component="h2">{title}</Typography>
                    </div>
                    <Typography className={classes.title} gutterBottom variant="h5" component="h2">{description}</Typography>

                    {/* <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
                    </CardContent> */}
                </CardActionArea>
                <CardActions className={classes.cardActions}>
                    <Button size="small" color="primary">specifications more...</Button>
                    <Typography variant="h5" color="textSecondary" component="h2">{id + 1}</Typography>
                </CardActions>
            </Card>
        </div>
    );

}

export default shopCard;