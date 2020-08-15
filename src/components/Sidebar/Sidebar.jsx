/*eslint-disable*/
import React, { useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";
// core components
import AdminNavbarLinks from "components/Navbars/AdminNavbarLinks.js";
import RTLNavbarLinks from "components/Navbars/RTLNavbarLinks.js";

import styles from "assets/jss/material-dashboard-react/components/sidebarStyle.js";
import "./../../assets/css/app.css";

const useStyles = makeStyles(styles);

export default function Sidebar(props) {
  const classes = useStyles();
  // verifies if routeName is the one active (in browser input)
  const [Select, setSelect] = useState([]);
  const { logo, image, logoText, aroutes,lroutes } = props;
  const handleClick = (item) => {
    setSelect((prevState) => ({...Select, [item]: !prevState[item] }));
};
 
    const SetMenuToUI = items => {
    return (items.map((item) => {
     
      if (!item.children) {
          return ( 
            <li className = "nav-Items__list" key = { item.mame } >
                 <NavLink to = "#" className = "nav-Items__link" > 
                 <i className={`far ${item.icon} nav-Items__icon`}></i>
                  { item.name } 
              </NavLink> 
            </li>
          );
      }
      return ( 
        <li  className = "nav-Items__list" key = { item.mame } >
         <NavLink to = "#" className = "nav-Items__link"
             onClick = {() => handleClick(item.name) }
             name = { item.name }
          >
        <i className={`far ${item.icon} nav-Items__icon`}></i>
         { item.name } 
          <ArrowDropDownIcon  style={{ "margin-right": "auto" }}/> 
          </NavLink> 
          {Select[item.name] && < ul className="submenu"> { SetMenuToUI(item.children) } </ul>}
           </li>
          );
      }))
    };

  var brand = (
    <div className={classes.logo}>
      <a
        href="https://bankmellat.ir/default.aspx"
        className={classNames(classes.logoLink, 'drawer',{
          [classes.logoLinkRTL]: props.rtlActive
        })}
        target="_blank"
      >
        <div className={classes.logoImage}>
          <img src={logo} alt="logo" className={classes.img} />
        </div>
        {logoText}
      </a>
    </div>
  );
  let layer = (
    <ul className="nav-Items nav-item-layer">
      <RTLNavbarLinks />
      {SetMenuToUI(lroutes)}
    </ul>
  );
  return (
    <div>
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          anchor= "left" 
          open={props.open}
          classes={{
            paper: classNames(classes.drawerPaper,'drawer', {
              [classes.drawerPaperRTL]: props.rtlActive
            })
          }}
          onClose={props.handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          {brand}
          {layer}
          <ul className="nav-Items">
          <RTLNavbarLinks />
            
            {SetMenuToUI(aroutes)}
            {/* منو حوزه ها */}
          </ul>
          {image !== undefined ? (
            <div
              className={classes.background}
              style={{ backgroundImage: "url(" + image + ")" }}
            />
          ) : null}
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          anchor="right"
          variant="permanent"
          open
          classes={{
            paper: classNames(classes.drawerPaper, {
              [classes.drawerPaperRTL]: props.rtlActive
            })
          }}
        >
          {brand}
          {layer}
          <div className="nav-Items ">{SetMenuToUI(aroutes)}</div>
          {image !== undefined ? (
            <div
              className={classes.background}
              style={{ backgroundImage: "url(" + image + ")" }}
            />
          ) : null}
        </Drawer>
      </Hidden>
    </div>
  );
}

Sidebar.propTypes = {
  rtlActive: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
  bgColor: PropTypes.oneOf(["purple", "blue", "green", "orange", "red"]),
  logo: PropTypes.string,
  image: PropTypes.string,
  logoText: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
  open: PropTypes.bool
};
