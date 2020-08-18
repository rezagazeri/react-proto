import React from "react";
import {Bar,Line,Pie} from 'react-chartjs-2';
import {Homepage_Bar,Homepage_Line,Homepage_Pie} from "./../../Services/ChartsData";



const chartcreator = ({type}) =>{
   const optionsData = (content)=>{
       return {
            title:{
            display:true,
            text:content,
            fontSize:18
            },
            legend:{
            display:true,
            position:'bottom'
            }
         }
   }

    const componentSelector =(type)=>{
      switch (type) {
        case "BAR": return <Bar   data={Homepage_Bar} options={optionsData("نیروی انسانی")} />;
        case "LINE": return <Line data={Homepage_Line} options={optionsData("ریسک های IT")} />;
        case "PIE": return <Pie data={Homepage_Pie}  options={optionsData("پروژه های IT")} />;
        default: return null;
      }
    }

    return (
      <div>
        {componentSelector(type)}
      </div>
    );
  }

export default chartcreator;