export const Homepage_Bar = {
  labels: ["یک ماه گذشته", "دو ماه گذشته", "سه ماه گذشته"],
  datasets: [
    {
      label: ["قراردادی"],
      backgroundColor: ["rgba(75,192,192,1)"],
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [145, 250, 162]
    },
    {
      label: ["شرکتی"],
      backgroundColor: ["rgba(251,51,0,1)"],
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [110, 200, 195]
    }
  ]
};

export const Homepage_Line = {
  labels: ["قابل پذیرش", "ریسک های حیاتی", "ریسک های بررسی نشده"],
  datasets: [
    {
      label: "ریسک",
      fill: false,
      lineTension: 0.5,
      backgroundColor: "rgba(75,192,192,1)",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [65, 59, 80, 81, 56]
    }
  ]
};

export const Homepage_Pie = {
  labels: ["پروژه های خارجی", "پروژه های داخلی"],
  datasets: [
    {
      label: "Rainfall",
      backgroundColor: ["#B21F00", "#C9DE00"],
      hoverBackgroundColor: ["#501800", "#4B5000"],
      data: [65, 59]
    }
  ]
};

export const optionsData = content => {
  return {
    padding: "0px",
    responsive: true,
    maintainAspectRatio: false,
    defaultFontSize: "14px",
    width: "300",
    height: "200",
    title: {
      display: true,
      text: content,
      fontSize: 18
    },
    legend: {
      display: true,
      position: "bottom"
    }
  };
};

export const riskLevel = data => {
  console.log(data)
  return {
    labels: ["ریسک بالا", "ریسک بحرانی", "ریسک پایین"],
    datasets: [
      {
        label: "Rainfall",
        backgroundColor: ["#B21F00", "#ef6c00", "#2e7d32"],
        hoverBackgroundColor: ["#501800", "#4B5000", "#e65100"],
        data: data
      }
    ]
  };
};
