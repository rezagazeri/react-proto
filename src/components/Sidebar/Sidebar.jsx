/*eslint-disable*/
import React, { useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
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
  const { logo, image, logoText, routes } = props;
  const handleClick = (item) => {
    setSelect((prevState) => ({...Select, [item]: !prevState[item] }));
};
 
    const SetMenuToUI = items => {
    return (items.map((item) => {
      if (!item.children) {
          return ( 
            <li className = "nav-Items__list" key = { item.mame } >
              <NavLink to = "#" className = "nav-Items__link" > 
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
          { item.name } 
          {/* <i className = "fas fa-caret-down" > </i>  */}
          </NavLink> 
          {Select[item.name] && < ul > { SetMenuToUI(item.children) } </ul>}
           </li>
          );
      }))
    };

  var brand = (
    <div className={classes.logo}>
      <a
        href="https://www.creative-tim.com?ref=mdr-sidebar"
        className={classNames(classes.logoLink, {
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
  return (
    <div>
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          anchor= "left" 
          open={props.open}
          classes={{
            paper: classNames(classes.drawerPaper, {
              [classes.drawerPaperRTL]: props.rtlActive
            })
          }}
          onClose={props.handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          {brand}
          <div className="nav-Items">
          <RTLNavbarLinks />
            {/* {props.rtlActive ? <RTLNavbarLinks /> : <AdminNavbarLinks />} */}

            SetMenuToUI(routes)
            {/* منو حوزه ها */}
          </div>
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
          <div className="nav-Items">{SetMenuToUI(routes)}</div>
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
