"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cardLink = exports.cardSubtitle = exports.cardTitle = exports.title = exports.defaultBoxShadow = exports.cardHeader = exports.cardActions = exports.roseCardHeader = exports.primaryCardHeader = exports.infoCardHeader = exports.dangerCardHeader = exports.successCardHeader = exports.warningCardHeader = exports.roseBoxShadow = exports.dangerBoxShadow = exports.warningBoxShadow = exports.successBoxShadow = exports.infoBoxShadow = exports.primaryBoxShadow = exports.whiteColor = exports.blackColor = exports.grayColor = exports.roseColor = exports.infoColor = exports.successColor = exports.dangerColor = exports.warningColor = exports.primaryColor = exports.defaultFont = exports.card = exports.boxShadow = exports.container = exports.transition = exports.drawerWidth = exports.hexToRgb = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*!

 =========================================================
 * Material Dashboard React - v1.8.0 based on Material Dashboard - v1.2.0
 =========================================================

 * Product Page: http://www.creative-tim.com/product/material-dashboard-react
 * Copyright 2019 Creative Tim (http://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
// ##############################
// // // Function that converts from hex color to rgb color
// // // Example: input = #9c27b0 => output = 156, 39, 176
// // // Example: input = 9c27b0 => output = 156, 39, 176
// // // Example: input = #999 => output = 153, 153, 153
// // // Example: input = 999 => output = 153, 153, 153
// #############################
var hexToRgb = function hexToRgb(input) {
  input = input + "";
  input = input.replace("#", "");
  var hexRegex = /[0-9A-Fa-f]/g;

  if (!hexRegex.test(input) || input.length !== 3 && input.length !== 6) {
    throw new Error("input is not a valid hex color.");
  }

  if (input.length === 3) {
    var _first = input[0];
    var _second = input[1];
    var _last = input[2];
    input = _first + _first + _second + _second + _last + _last;
  }

  input = input.toUpperCase(input);
  var first = input[0] + input[1];
  var second = input[2] + input[3];
  var last = input[4] + input[5];
  return parseInt(first, 16) + ", " + parseInt(second, 16) + ", " + parseInt(last, 16);
}; // ##############################
// // // Variables - Styles that are used on more than one component
// #############################


exports.hexToRgb = hexToRgb;
var drawerWidth = 260;
exports.drawerWidth = drawerWidth;
var transition = {
  transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
};
exports.transition = transition;
var container = {
  paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto"
};
exports.container = container;
var defaultFont = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: "300",
  lineHeight: "1.5em"
};
exports.defaultFont = defaultFont;
var primaryColor = ["#9c27b0", "#ab47bc", "#8e24aa", "#af2cc5"];
exports.primaryColor = primaryColor;
var warningColor = ["#ff9800", "#ffa726", "#fb8c00", "#ffa21a"];
exports.warningColor = warningColor;
var dangerColor = ["#f44336", "#ef5350", "#e53935", "#f55a4e"];
exports.dangerColor = dangerColor;
var successColor = ["#4caf50", "#66bb6a", "#43a047", "#5cb860"];
exports.successColor = successColor;
var infoColor = ["#00acc1", "#26c6da", "#00acc1", "#00d3ee"];
exports.infoColor = infoColor;
var roseColor = ["#e91e63", "#ec407a", "#d81b60", "#eb3573"];
exports.roseColor = roseColor;
var grayColor = ["#999", "#777", "#3C4858", "#AAAAAA", "#D2D2D2", "#DDD", "#b4b4b4", "#555555", "#333", "#a9afbb", "#eee", "#e7e7e7"];
exports.grayColor = grayColor;
var blackColor = "#000";
exports.blackColor = blackColor;
var whiteColor = "#FFF";
exports.whiteColor = whiteColor;
var boxShadow = {
  boxShadow: "0 10px 30px -12px rgba(" + hexToRgb(blackColor) + ", 0.42), 0 4px 25px 0px rgba(" + hexToRgb(blackColor) + ", 0.12), 0 8px 10px -5px rgba(" + hexToRgb(blackColor) + ", 0.2)"
};
exports.boxShadow = boxShadow;
var primaryBoxShadow = {
  boxShadow: "0 4px 20px 0 rgba(" + hexToRgb(blackColor) + ",.14), 0 7px 10px -5px rgba(" + hexToRgb(primaryColor[0]) + ",.4)"
};
exports.primaryBoxShadow = primaryBoxShadow;
var infoBoxShadow = {
  boxShadow: "0 4px 20px 0 rgba(" + hexToRgb(blackColor) + ",.14), 0 7px 10px -5px rgba(" + hexToRgb(infoColor[0]) + ",.4)"
};
exports.infoBoxShadow = infoBoxShadow;
var successBoxShadow = {
  boxShadow: "0 4px 20px 0 rgba(" + hexToRgb(blackColor) + ",.14), 0 7px 10px -5px rgba(" + hexToRgb(successColor[0]) + ",.4)"
};
exports.successBoxShadow = successBoxShadow;
var warningBoxShadow = {
  boxShadow: "0 4px 20px 0 rgba(" + hexToRgb(blackColor) + ",.14), 0 7px 10px -5px rgba(" + hexToRgb(warningColor[0]) + ",.4)"
};
exports.warningBoxShadow = warningBoxShadow;
var dangerBoxShadow = {
  boxShadow: "0 4px 20px 0 rgba(" + hexToRgb(blackColor) + ",.14), 0 7px 10px -5px rgba(" + hexToRgb(dangerColor[0]) + ",.4)"
};
exports.dangerBoxShadow = dangerBoxShadow;
var roseBoxShadow = {
  boxShadow: "0 4px 20px 0 rgba(" + hexToRgb(blackColor) + ",.14), 0 7px 10px -5px rgba(" + hexToRgb(roseColor[0]) + ",.4)"
};
exports.roseBoxShadow = roseBoxShadow;

var warningCardHeader = _objectSpread({
  background: "linear-gradient(60deg, " + warningColor[1] + ", " + warningColor[2] + ")"
}, warningBoxShadow);

exports.warningCardHeader = warningCardHeader;

var successCardHeader = _objectSpread({
  background: "linear-gradient(60deg, " + successColor[1] + ", " + successColor[2] + ")"
}, successBoxShadow);

exports.successCardHeader = successCardHeader;

var dangerCardHeader = _objectSpread({
  background: "linear-gradient(60deg, " + dangerColor[1] + ", " + dangerColor[2] + ")"
}, dangerBoxShadow);

exports.dangerCardHeader = dangerCardHeader;

var infoCardHeader = _objectSpread({
  background: "linear-gradient(60deg, " + infoColor[1] + ", " + infoColor[2] + ")"
}, infoBoxShadow);

exports.infoCardHeader = infoCardHeader;

var primaryCardHeader = _objectSpread({
  background: "linear-gradient(60deg, " + primaryColor[1] + ", " + primaryColor[2] + ")"
}, primaryBoxShadow);

exports.primaryCardHeader = primaryCardHeader;

var roseCardHeader = _objectSpread({
  background: "linear-gradient(60deg, " + roseColor[1] + ", " + roseColor[2] + ")"
}, roseBoxShadow);

exports.roseCardHeader = roseCardHeader;

var cardActions = _objectSpread({
  margin: "0 20px 10px",
  paddingTop: "10px",
  borderTop: "1px solid " + grayColor[10],
  height: "auto"
}, defaultFont);

exports.cardActions = cardActions;
var cardHeader = {
  margin: "-20px 15px 0",
  borderRadius: "3px",
  padding: "15px"
};
exports.cardHeader = cardHeader;
var card = {
  display: "inline-block",
  position: "relative",
  width: "100%",
  margin: "25px 0",
  boxShadow: "0 1px 4px 0 rgba(" + hexToRgb(blackColor) + ", 0.14)",
  borderRadius: "3px",
  color: "rgba(" + hexToRgb(blackColor) + ", 0.87)",
  background: whiteColor
};
exports.card = card;
var defaultBoxShadow = {
  border: "0",
  borderRadius: "3px",
  boxShadow: "0 10px 20px -12px rgba(" + hexToRgb(blackColor) + ", 0.42), 0 3px 20px 0px rgba(" + hexToRgb(blackColor) + ", 0.12), 0 8px 10px -5px rgba(" + hexToRgb(blackColor) + ", 0.2)",
  padding: "10px 0",
  transition: "all 150ms ease 0s"
};
exports.defaultBoxShadow = defaultBoxShadow;
var title = {
  color: grayColor[2],
  textDecoration: "none",
  fontWeight: "300",
  marginTop: "30px",
  marginBottom: "25px",
  minHeight: "32px",
  fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
  "& small": {
    color: grayColor[1],
    fontWeight: "400",
    lineHeight: "1"
  }
};
exports.title = title;

var cardTitle = _objectSpread({}, title, {
  marginTop: "0",
  marginBottom: "3px",
  minHeight: "auto",
  "& a": _objectSpread({}, title, {
    marginTop: ".625rem",
    marginBottom: "0.75rem",
    minHeight: "auto"
  })
});

exports.cardTitle = cardTitle;
var cardSubtitle = {
  marginTop: "-.375rem"
};
exports.cardSubtitle = cardSubtitle;
var cardLink = {
  "& + $cardLink": {
    marginLeft: "1.25rem"
  }
};
exports.cardLink = cardLink;