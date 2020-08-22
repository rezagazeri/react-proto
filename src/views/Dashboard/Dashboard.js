import React ,{useState}from "react";
// @material-ui/core
import { makeStyles,Button } from "@material-ui/core";
// @material-ui/icons

import AccessTime from "@material-ui/icons/AccessTime";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";

import Chartcreator from "./../../components/Chartcreator/Chartcreator";
import {Itviews} from "../../components/Itview/Itview";
import {Events} from "../../components/Events/Events";
import Chartresize from "../../components/Chartresize/Chartresize";


import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";


const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  const [Showmodal,setShowmodal]=useState(false);
  const handleClick= ()=>{
    setShowmodal(!Showmodal)
  }
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={12} >
        <div className="dashboard__title" p={2}>
                    گزارشات IT
          </div>
        </GridItem>
      </GridContainer>
{/*=====================start level 2 dashboard charts and bugs component and combain chard ====================== */}
      <GridContainer  >
        <GridItem xs={12} sm={12} md={4} >
          <Card chart>
            <CardHeader >
              <Chartcreator
                 type="BAR"
              />
            </CardHeader>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> مشاهده با جزییات 
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader >
            <Chartcreator
                 type="LINE"
              />
            </CardHeader>
            
            <CardFooter >
              <Button className={classes.stats} onClick={handleClick}>
                <AccessTime /> مشاهده با جزییات 
              </Button>
              {Showmodal?<Chartresize/> :null}
            </CardFooter>
          </Card>
        </GridItem>
             <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader >
            <Chartcreator
                 type="PIE"
              />
            </CardHeader>
            
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> مشاهده با جزییات 
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Events/>
     
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>

          <Itviews/>
         
        </GridItem>
      </GridContainer>
    </div>
  );
}
