export const Homepage_Bar = {
    labels: [ 'یک ماه گذشته',
             'دو ماه گذشته', 'سه ماه گذشته'],
    datasets: [
      {
        label: ['قراردادی'],
        backgroundColor: ['rgba(75,192,192,1)'],
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [2, 5, 6]
      },
      {
        label: ['شرکتی'],
        backgroundColor: ['rgba(251,51,0,1)'],
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [7, 8, 10]
      }
    ]
  };


  export const Homepage_Line = {
    labels: ['قابل پذیرش', 'ریسک های حیاتی', 'ریسک های بررسی نشده'
            ],
    datasets: [
      {
        label: 'ریسک',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56]
      }
    ]
  }

  export const Homepage_Pie = {
    labels: ['پروژه های خارجی', 'پروژه های داخلی', ],
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: [
          '#B21F00',
          '#C9DE00',
          
        ],
        hoverBackgroundColor: [
        '#501800',
        '#4B5000',
       
        ],
        data: [65, 59]
      }
    ]
  }
  