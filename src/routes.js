/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.js";


export const layerRoutes = [
  {
    path: "/dashboard",
    name: "گزارشات بر مبنای سطوح راهبردی",
    rtlName: "سطوح کلان",
    layout: "/admin",
        children: [
          {

            path: "/dashboard",
            name: "سطح استراتژیک",
            rtlName: "استراتژیک",
            icon: "fa-coins",
            layout: "/admin",
            id: "1",
          },
          {

            path: "/dashboard",
            name: "سطح تاکتیکی ",
            rtlName: "تاکتیکی",
            icon: "fa-coins",
            layout: "/admin",
            id: "2",
          },
          {

            path: "/dashboard",
            name: "سطح عملیاتی",
            rtlName: " عملیاتی",
            icon: "fa-coins",
            layout: "/admin",
            id: "3",
           }
        ]
  }
  
]


export const areaRoutes = [
  {
    path: "/dashboard",
    name: "گزارشات بر مبنای حوزه ها",
    rtlName: "حوزه ها",
    component: DashboardPage,
    layout: "/admin",
    children: [
        {
          path: "/dashboard",
          name: "مالی",
          rtlName: "مالی",
          component: DashboardPage,
          icon: "fa-coins",
          layout: "/admin",
          id: "1",
              children: [
                {
                  name: 'هزینه',
                  url: '/cost'
              },{
                name: 'ارزش گذاری',
                url: '/rate'
              },{
                name: 'درآمد / سود',
                url: '/income'
              }
              ]
        },
        {
          path: "/user",
          name: "نیروی انسانی",
          rtlName: "نیروی انسانی",
          component: UserProfile,
          icon: "fa-users",
          layout: "/admin",
          id: "2", 
              children: [
                {
                  name: 'بانک',
                  url: '/bank'
                },{
                  name: ' شرکت های تابعه',
                  url: '/subsidiaries'
                },{
                name: 'شرکت های سهام دار',
                url: '/companies'
                }
              ]
            },
        {
          path: "/table",
          name: "برنامه ها",
          rtlName: "برنامه ها",
          component: TableList,
          icon: "fa-solar-panel",
          layout: "/admin",
          id: "3" ,
                children: [
                {
                  name: 'هولدینگ',
                  url: '/holding'
                },{
                  name: ' غیر هولدینگ',
                  url: '/non-holding'
                }
              ]
            },
        {
          path: "/typography",
          name: "شرکت ها",
          rtlName: "شرکت ها",
          icon: "fa-building",
          component: Typography,
          layout: "/admin",
          id: "4" ,
              children: [
                {
                  name: 'تابعه',
                  url: '/subsidiary'
                },{
                  name: '  سهام دار',
                  url: '/shareholder'
                }, {
                  name: 'طرف قرارداد',
                  url: '/contracting'
                }
              ]
        },
        {
          path: "/icons",
          name: "سرویس ها",
          rtlName: "سرویس ها",
          icon: "fa-server",
          component: Icons,
          layout: "/admin",
          id: "5",
                children: [
                  {
                  name: 'زیرساخت',
                  url: '/Infrastructure'
                  },{
                  name: '  نرم افزار',
                  url: '/software'
                }, {
                  name: 'سخت افزار ',
                  url: '/hardware'
                  }
                  ]
        },
        {
          path: "/maps",
          name: "فرآیند ها",
          rtlName: "فرآیند ها",
          component: Maps,
          icon: "fa-chalkboard-teacher",
          layout: "/admin",
          id: "6" , 
                children: [
                  {
                    name : 'مبتنی بر COBJTو JTJL',
                    url: '/method'
                  }
                ]
        },
        {
          path: "/notifications",
          name: "ریسک های IT",
          rtlName: "ریسک های IT",
          component: NotificationsPage,
          icon: "fa-asymmetrik",
          layout: "/admin",
          id: "7"
        },
        {
          path: "/notifications",
          name: "اهداف و استراتژی ها",
          rtlName: "اهداف و استراتژی ها",
          component: NotificationsPage,
          icon: "fa-bezier-curve",
          layout: "/admin",
          id: "8"
        },
        {
          path: "/notifications",
          name: "بخش نامه ها و دستور العمل ها",
          rtlName: "بخش نامه ها و دستور العمل ها",
          component: NotificationsPage,
          icon: "fa-clipboard-list",
          layout: "/admin",
          id: "9"
        },
        {
          path: "/notifications",
          name: "تنظیمات",
          rtlName: "تنظیمات",
          component: NotificationsPage,
          icon: "fa-cogs",
          layout: "/admin",
          id: "10"
        }
    ]
  }   
];

export const itviewCards = [
           {
            path: "/itrisks",
            name: "ریسک های IT",
            rtlName: "ریسک های IT",
            icon: "important_devices",
            layout: "/admin",
            color:"primary",
            id: "1",
          },
          {

            path: "/financestatus",
            name: "وضعیت مالی ",
            rtlName: "وضعیت مالی",
            icon: "frequest_page",
            layout: "/admin",
            color:"primary",
            id: "2",
          },
          {

            path: "/itprojects",
            name: "پروژه های IT",
            rtlName: "پروژه های IT",
            icon: "list",
            layout: "/admin",
            color:"primary",
            id: "3",
           },
           {
            path: "/personsstatus",
            name: "نیروی انسانی",
            rtlName: "نیروی انسانی",
            icon: "supervised_user_circle",
            layout: "/admin",
            color:"primary",
            id: "4",
          }
  
]