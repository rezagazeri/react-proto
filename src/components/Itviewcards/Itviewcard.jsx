
import React from 'react';
import {Link} from 'react-router-dom';
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardFooter from "components/Card/CardFooter.js";
import Icon from "@material-ui/core/Icon";
import GridItem from "components/Grid/GridItem.js";


import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
      Width: 150
    }
  });

export  function Itviewcard({text,icon,color}) {
    const classes = useStyles();
    return (
      < GridItem  xs={12} sm={12} md={6}>  
        <Card >
            <CardHeader bgcolor={color} stats icon>
              <CardIcon color={color}>
                <Icon>{icon}</Icon>
              </CardIcon>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Link to="#" onClick={e => e.preventDefault()}>
                  {text}
                </Link>
              </div>
            </CardFooter>
        </Card>
        </GridItem> 
    );
  }
  