import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import GridContainer from "components/Grid/GridContainer.js";

import {Itviewcard} from './../Itviewcards/Itviewcard';
import {itviewCards} from "./../../routes";






const useStyles = makeStyles({
  root: {
    maxWidth: 550,
  },
  subcard:{
    maxWidth: 150,
    height: "auto",

    backgroundColor: "#fff4de"
  }
});
export  function Itviews() {
  const classes = useStyles();

  return (
    <Card className={classes.root,"card"}>
      <h6 className="card__title">IT در یک نگاه </h6>
      <CardActionArea>
        <CardMedia
         style = {{ height: 0, paddingTop: '56%'}}
           image= {require ("./../../assets/img/itview.jpg")}
          title="Contemplative Reptile"
        />

        <CardContent className="papers-container">
            <GridContainer >
               {
                  itviewCards.map(card => <Itviewcard 
                    icon={card.icon}
                    text={card.name}
                    color={card.color}
                  />)
               }    
            </GridContainer>
        </CardContent>
      </CardActionArea>
      
    </Card>
  );
}
