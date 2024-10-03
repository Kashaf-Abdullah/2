// // import React, { useState, useEffect } from 'react';
// // import { Bar, Radar, Line } from 'react-chartjs-2';
// // import {
// //   Chart as ChartJS,
// //   CategoryScale,
// //   LinearScale,
// //   BarElement,
// //   ArcElement,
// //   PointElement,
// //   LineElement,
// //   Title,
// //   Tooltip,
// //   Legend,
// //   Filler,
// //   RadialLinearScale,
// //   BarController,
// //   RadarController,
// //   LineController,
// //   PolarAreaController
// // } from 'chart.js';

// // // Register necessary components with Chart.js
// // ChartJS.register(
// //   CategoryScale,
// //   LinearScale,
// //   BarElement,
// //   ArcElement,
// //   PointElement,
// //   LineElement,
// //   Title,
// //   Tooltip,
// //   Legend,
// //   Filler,
// //   RadialLinearScale,
// //   BarController,
// //   RadarController,
// //   LineController,
// //   PolarAreaController
// // );

// // const ProductAnalysis = () => {
// //   const [productData, setProductData] = useState([]);

// //   useEffect(() => {
// //     // Simulated data parsing, replace with actual parsing logic
// //     const parsedData = parseData(); // Implement parseData() function to parse your data
// //     setProductData(parsedData);
// //   }, []);

// //   // Function to parse your data into structured format
// //   const parseData = () => {
// //     // Example parsing logic (replace with your actual parsing logic)
// //     const rawData = [
// //       { ID: 1, Type: 'Coat', Price: '$120', Likes: 'Warmth', Dislikes: 'Bulky' },
// //       { ID: 2, Type: 'Jacket', Price: '$85', Likes: 'Style', Dislikes: 'Not warm enough' },
// //       // ... Add all the remaining items here
// //     ];

// //     return rawData.map(item => ({
// //       id: item.ID,
// //       type: item.Type,
// //       price: parseFloat(item.Price.replace('$', '')),
// //       likes: item.Likes,
// //       dislikes: item.Dislikes
// //     }));
// //   };

// //   // Function to calculate average price by type
// //   const calculateAveragePriceByType = () => {
// //     const averagePrices = {};
// //     productData.forEach(product => {
// //       if (!averagePrices[product.type]) {
// //         averagePrices[product.type] = {
// //           total: 0,
// //           count: 0
// //         };
// //       }
// //       averagePrices[product.type].total += product.price;
// //       averagePrices[product.type].count++;
// //     });

// //     Object.keys(averagePrices).forEach(type => {
// //       averagePrices[type].average = averagePrices[type].total / averagePrices[type].count;
// //     });

// //     return averagePrices;
// //   };

// //   // Calculate average prices by type
// //   const averagePrices = calculateAveragePriceByType();

// //   // Data for the charts
// //   const barChartData = {
// //     labels: Object.keys(averagePrices),
// //     datasets: [
// //       {
// //         label: 'Average Price',
// //         backgroundColor: 'rgba(75,192,192,1)',
// //         borderColor: 'rgba(0,0,0,1)',
// //         borderWidth: 1,
// //         hoverBackgroundColor: 'rgba(75,192,192,0.4)',
// //         hoverBorderColor: 'rgba(0,0,0,1)',
// //         data: Object.values(averagePrices).map(avg => avg.average.toFixed(2))
// //       }
// //     ]
// //   };

// //   // Data for Radar Chart
// //   const radarData = {
// //     labels: ['Warmth', 'Style', 'Comfort', 'Durability', 'Breathability'],
// //     datasets: [
// //       {
// //         label: 'Customer Likes',
// //         backgroundColor: 'rgba(255,99,132,0.2)',
// //         borderColor: 'rgba(255,99,132,1)',
// //         pointBackgroundColor: 'rgba(255,99,132,1)',
// //         pointBorderColor: '#fff',
// //         pointHoverBackgroundColor: '#fff',
// //         pointHoverBorderColor: 'rgba(255,99,132,1)',
// //         data: [65, 59, 90, 81, 56] // Replace with actual data
// //       },
// //       {
// //         label: 'Customer Dislikes',
// //         backgroundColor: 'rgba(54,162,235,0.2)',
// //         borderColor: 'rgba(54,162,235,1)',
// //         pointBackgroundColor: 'rgba(54,162,235,1)',
// //         pointBorderColor: '#fff',
// //         pointHoverBackgroundColor: '#fff',
// //         pointHoverBorderColor: 'rgba(54,162,235,1)',
// //         data: [28, 48, 40, 19, 96] // Replace with actual data
// //       }
// //     ]
// //   };

// //   // Data for Stock/Line Chart
// //   const lineData = {
// //     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], // Replace with actual time series labels
// //     datasets: [
// //       {
// //         label: 'Price over Time',
// //         fill: false,
// //         lineTension: 0.1,
// //         backgroundColor: 'rgba(75,192,192,0.4)',
// //         borderColor: 'rgba(75,192,192,1)',
// //         borderCapStyle: 'butt',
// //         borderDash: [],
// //         borderDashOffset: 0.0,
// //         borderJoinStyle: 'miter',
// //         pointBorderColor: 'rgba(75,192,192,1)',
// //         pointBackgroundColor: '#fff',
// //         pointBorderWidth: 1,
// //         pointHoverRadius: 5,
// //         pointHoverBackgroundColor: 'rgba(75,192,192,1)',
// //         pointHoverBorderColor: 'rgba(220,220,220,1)',
// //         pointHoverBorderWidth: 2,
// //         pointRadius: 1,
// //         pointHitRadius: 10,
// //         data: [65, 59, 80, 81, 56, 55, 40] // Replace with actual data
// //       }
// //     ]
// //   };

// //   // Data for Control Chart (Simplified Example)
// //   const controlData = {
// //     labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
// //     datasets: [
// //       {
// //         label: 'Product Quality Control',
// //         fill: false,
// //         lineTension: 0.1,
// //         backgroundColor: 'rgba(75,192,192,0.4)',
// //         borderColor: 'rgba(75,192,192,1)',
// //         pointBackgroundColor: 'rgba(75,192,192,1)',
// //         pointBorderColor: '#fff',
// //         data: [5, 7, 6, 4, 5, 8, 6] // Replace with actual data
// //       },
// //       {
// //         label: 'Upper Control Limit',
// //         borderColor: 'rgba(255,0,0,0.4)',
// //         borderDash: [5, 5],
// //         data: [8, 8, 8, 8, 8, 8, 8] // UCL value
// //       },
// //       {
// //         label: 'Lower Control Limit',
// //         borderColor: 'rgba(255,0,0,0.4)',
// //         borderDash: [5, 5],
// //         data: [2, 2, 2, 2, 2, 2, 2] // LCL value
// //       }
// //     ]
// //   };

// //   return (
// //     <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
// //       <h2 style={{ gridColumn: 'span 2', textAlign: 'center' }}>Product Analysis</h2>
      
// //       <div>
// //         <h3>Average Price by Product Type</h3>
// //         <Bar
// //           data={barChartData}
// //           options={{
// //             title: {
// //               display: true,
// //               text: 'Average Price by Product Type',
// //               fontSize: 20
// //             },
// //             legend: {
// //               display: false
// //             },
// //             scales: {
// //               y: {
// //                 beginAtZero: true
// //               },
// //               x: {
// //                 type: 'category'
// //               }
// //             }
// //           }}
// //         />
// //       </div>

// //       <div>
// //         <h3>Customer Preferences Radar Chart</h3>
// //         <Radar
// //           data={radarData}
// //           options={{
// //             title: {
// //               display: true,
// //               text: 'Customer Preferences',
// //               fontSize: 20
// //             },
// //             scale: {
// //               ticks: {
// //                 beginAtZero: true
// //               }
// //             }
// //           }}
// //         />
// //       </div>

// //       <div>
// //         <h3>Stock/Price Line Chart</h3>
// //         <Line
// //           data={lineData}
// //           options={{
// //             title: {
// //               display: true,
// //               text: 'Price Trends over Time',
// //               fontSize: 20
// //             },
// //             scales: {
// //               y: {
// //                 beginAtZero: true
// //               }
// //             }
// //           }}
// //         />
// //       </div>

// //       <div>
// //         <h3>Control Chart</h3>
// //         <Line
// //           data={controlData}
// //           options={{
// //             title: {
// //               display: true,
// //               text: 'Control Chart',
// //               fontSize: 20
// //             },
// //             scales: {
// //               y: {
// //                 beginAtZero: true
// //               }
// //             }
// //           }}
// //         />
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductAnalysis;


// import React, { useState, useEffect } from 'react';
// import { Bar, Line, Pie, Radar, Scatter } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   LineElement,
//   PointElement,
//   ArcElement,
//   RadialLinearScale,
//   Title,
//   Tooltip,
//   Legend,
//   Filler,
//   BarController,
//   LineController,
//   RadarController,
//   ScatterController,
//   PieController
// } from 'chart.js';

// // Register necessary components with Chart.js
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   LineElement,
//   PointElement,
//   ArcElement,
//   RadialLinearScale,
//   Title,
//   Tooltip,
//   Legend,
//   Filler,
//   BarController,
//   LineController,
//   RadarController,
//   ScatterController,
//   PieController
// );

// const ProductAnalysis = () => {
//   const [productData, setProductData] = useState([]);
//   const [difficulty, setDifficulty] = useState('easy'); // State to track selected difficulty

//   useEffect(() => {
//     // Simulated data parsing, replace with actual parsing logic
//     const parsedData = parseData(); // Implement parseData() function to parse your data
//     setProductData(parsedData);
//   }, []);

//   // Function to parse your data into structured format
//   const parseData = () => {
//     // Example parsing logic (replace with your actual parsing logic)
//     const rawData = [
//       { ID: 1, Type: 'Coat', Price: '$120', Likes: 'Warmth', Dislikes: 'Bulky' },
//       { ID: 2, Type: 'Jacket', Price: '$85', Likes: 'Style', Dislikes: 'Not warm enough' },
//       // ... Add all the remaining items here
//     ];

//     return rawData.map(item => ({
//       id: item.ID,
//       type: item.Type,
//       price: parseFloat(item.Price.replace('$', '')),
//       likes: item.Likes,
//       dislikes: item.Dislikes
//     }));
//   };

//   // Function to calculate average price by type
//   const calculateAveragePriceByType = () => {
//     const averagePrices = {};
//     productData.forEach(product => {
//       if (!averagePrices[product.type]) {
//         averagePrices[product.type] = {
//           total: 0,
//           count: 0
//         };
//       }
//       averagePrices[product.type].total += product.price;
//       averagePrices[product.type].count++;
//     });

//     Object.keys(averagePrices).forEach(type => {
//       averagePrices[type].average = averagePrices[type].total / averagePrices[type].count;
//     });

//     return averagePrices;
//   };

//   // Calculate average prices by type
//   const averagePrices = calculateAveragePriceByType();

//   // Data for the charts
//   const barChartData = {
//     labels: Object.keys(averagePrices),
//     datasets: [
//       {
//         label: 'Average Price',
//         backgroundColor: 'rgba(75,192,192,1)',
//         borderColor: 'rgba(0,0,0,1)',
//         borderWidth: 1,
//         hoverBackgroundColor: 'rgba(75,192,192,0.4)',
//         hoverBorderColor: 'rgba(0,0,0,1)',
//         data: Object.values(averagePrices).map(avg => avg.average.toFixed(2))
//       }
//     ]
//   };

//   const pieChartData = {
//     labels: Object.keys(averagePrices),
//     datasets: [
//       {
//         label: 'Average Price',
//         backgroundColor: [
//           'rgba(255,99,132,0.2)',
//           'rgba(54,162,235,0.2)',
//           'rgba(255,206,86,0.2)',
//           'rgba(75,192,192,0.2)',
//           'rgba(153,102,255,0.2)',
//           'rgba(255,159,64,0.2)'
//         ],
//         borderColor: [
//           'rgba(255,99,132,1)',
//           'rgba(54,162,235,1)',
//           'rgba(255,206,86,1)',
//           'rgba(75,192,192,1)',
//           'rgba(153,102,255,1)',
//           'rgba(255,159,64,1)'
//         ],
//         borderWidth: 1,
//         data: Object.values(averagePrices).map(avg => avg.average.toFixed(2))
//       }
//     ]
//   };

//   const radarData = {
//     labels: ['Warmth', 'Style', 'Comfort', 'Durability', 'Breathability'],
//     datasets: [
//       {
//         label: 'Customer Likes',
//         backgroundColor: 'rgba(255,99,132,0.2)',
//         borderColor: 'rgba(255,99,132,1)',
//         pointBackgroundColor: 'rgba(255,99,132,1)',
//         pointBorderColor: '#fff',
//         pointHoverBackgroundColor: '#fff',
//         pointHoverBorderColor: 'rgba(255,99,132,1)',
//         data: [65, 59, 90, 81, 56] // Replace with actual data
//       },
//       {
//         label: 'Customer Dislikes',
//         backgroundColor: 'rgba(54,162,235,0.2)',
//         borderColor: 'rgba(54,162,235,1)',
//         pointBackgroundColor: 'rgba(54,162,235,1)',
//         pointBorderColor: '#fff',
//         pointHoverBackgroundColor: '#fff',
//         pointHoverBorderColor: 'rgba(54,162,235,1)',
//         data: [28, 48, 40, 19, 96] // Replace with actual data
//       }
//     ]
//   };

//   const scatterData = {
//     labels: ['Price', 'Warmth', 'Style', 'Comfort', 'Durability', 'Breathability'],
//     datasets: [
//       {
//         label: 'Product Scatter',
//         fill: false,
//         backgroundColor: 'rgba(75,192,192,0.4)',
//         borderColor: 'rgba(75,192,192,1)',
//         pointBorderColor: 'rgba(75,192,192,1)',
//         pointBackgroundColor: '#fff',
//         pointBorderWidth: 1,
//         pointHoverRadius: 5,
//         pointHoverBackgroundColor: 'rgba(75,192,192,1)',
//         pointHoverBorderColor: 'rgba(220,220,220,1)',
//         pointHoverBorderWidth: 2,
//         pointRadius: 1,
//         pointHitRadius: 10,
//         data: [
//           { x: 120, y: 65 },
//           { x: 85, y: 59 },
//           { x: 60, y: 90 },
//           { x: 25, y: 81 },
//           { x: 30, y: 56 },
//           { x: 20, y: 55 }
//         ] // Replace with actual data
//       }
//     ]
//   };

//   const lineData = {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], // Replace with actual time series labels
//     datasets: [
//       {
//         label: 'Price over Time',
//         fill: false,
//         lineTension: 0.1,
//         backgroundColor: 'rgba(75,192,192,0.4)',
//         borderColor: 'rgba(75,192,192,1)',
//         borderCapStyle: 'butt',
//         borderDash: [],
//         borderDashOffset: 0.0,
//         borderJoinStyle: 'miter',
//         pointBorderColor: 'rgba(75,192,192,1)',
//         pointBackgroundColor: '#fff',
//         pointBorderWidth: 1,
//         pointHoverRadius: 5,
//         pointHoverBackgroundColor: 'rgba(75,192,192,1)',
//         pointHoverBorderColor: 'rgba(220,220,220,1)',
//         pointHoverBorderWidth: 2,
//         pointRadius: 1,
//         pointHitRadius: 10,
//         data: [65, 59, 80, 81, 56, 55, 40] // Replace with actual data
//       }
//     ]
//   };

//   // Data for Control Chart (Simplified Example)
//   const controlData = {
//     labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
//     datasets: [
//       {
//         label: 'Product Quality Control',
//         fill: false,
//         lineTension: 0.1,
//         backgroundColor: 'rgba(75,192,192,0.4)',
//         borderColor: 'rgba(75,192,192,1)',
//         pointBackgroundColor: 'rgba(75,192,192,1)',
//         pointBorderColor: '#fff',
//         pointHoverBackgroundColor: '#fff',
//         pointHoverBorderColor: 'rgba(75,192,192,1)',
//         data: [50, 51, 49, 52, 50, 48, 53] // Replace with actual control data
//       }
//     ]
//   };

//   const renderEasyCharts = () => (
//     <div className="easy-charts">
//       <h3>Bar Chart</h3>
//       <Bar
//         data={barChartData}
//         options={{
//           title: {
//             display: true,
//             text: 'Average Price by Type',
//             fontSize: 20
//           },
//           scales: {
//             y: {
//               beginAtZero: true
//             }
//           }
//         }}
//       />
//       <h3>Pie Chart</h3>
//       <Pie
//         data={pieChartData}
//         options={{
//           title: {
//             display: true,
//             text: 'Price Distribution by Type',
//             fontSize: 20
//           }
//         }}
//       />
//       <h3>Line Chart</h3>
//       <Line
//         data={lineData}
//         options={{
//           title: {
//             display: true,
//             text: 'Price Trend Over Time',
//             fontSize: 20
//           },
//           scales: {
//             y: {
//               beginAtZero: true
//             }
//           }
//         }}
//       />
//     </div>
//   );

//   const renderMediumCharts = () => (
//     <div className="medium-charts">
//       <h3>Radar Chart</h3>
//       <Radar
//         data={radarData}
//         options={{
//           title: {
//             display: true,
//             text: 'Customer Preferences Analysis',
//             fontSize: 20
//           },
//           scale: {
//             ticks: {
//               beginAtZero: true
//             }
//           }
//         }}
//       />
//       <h3>Scatter Chart</h3>
//       <Scatter
//         data={scatterData}
//         options={{
//           title: {
//             display: true,
//             text: 'Price vs Preference Scatter',
//             fontSize: 20
//           },
//           scales: {
//             x: {
//               beginAtZero: true
//             },
//             y: {
//               beginAtZero: true
//             }
//           }
//         }}
//       />
//     </div>
//   );

//   const renderHardCharts = () => (
//     <div className="hard-charts">
//       <h3>Control Chart</h3>
//       <Line
//         data={controlData}
//         options={{
//           title: {
//             display: true,
//             text: 'Control Chart',
//             fontSize: 20
//           },
//           scales: {
//             y: {
//               beginAtZero: true
//             }
//           }
//         }}
//       />
//       {/* Add more complex charts like bubble charts or multi-axis charts if needed */}
//     </div>
//   );

//   return (
//     <div>
//       <h2>Product Analysis</h2>
//       <label htmlFor="difficulty">Select Difficulty Level: </label>
//       <select
//         id="difficulty"
//         value={difficulty}
//         onChange={(e) => setDifficulty(e.target.value)}
//       >
//         <option value="easy">Easy</option>
//         <option value="medium">Medium</option>
//         <option value="hard">Hard</option>
//       </select>

//       {difficulty === 'easy' && renderEasyCharts()}
//       {difficulty === 'medium' && renderMediumCharts()}
//       {difficulty === 'hard' && renderHardCharts()}
//     </div>
//   );
// };

// export default ProductAnalysis;














// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import {
//   Chart as ChartJS,
//   CategoryScale, // x-axis scale
//   LinearScale,   // y-axis scale
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// } from 'chart.js';
// import { Line } from 'react-chartjs-2';

// // Register Chart.js components (scales, elements, etc.)
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const ProductAnalysis = () => {
//   const [chartData, setChartData] = useState({
//     labels: [],  // Dates
//     datasets: [] // Sales data
//   });

//   useEffect(() => {
//     const fetchForecast = async () => {
//       try {
//         const response = await axios.post('http://localhost:3000/get-forecast', {
//           sales_data: [
//             { ds: '2023-01-01', y: 100 },
//             { ds: '2023-01-02', y: 150 },
//             // Add more sales data here
//           ],
//         });
//         const forecast = response.data;

//         if (forecast && forecast.length > 0) {
//           setChartData({
//             labels: forecast.map(item => item.ds),  // Dates for x-axis
//             datasets: [{
//               label: 'Forecasted Sales',
//               data: forecast.map(item => item.yhat),  // Sales data for y-axis
//               borderColor: 'rgba(75, 192, 192, 1)',
//               fill: false,
//             }],
//           });
//         }
//       } catch (error) {
//         console.error("Error fetching forecast data", error);
//       }
//     };
    
//     fetchForecast();
//   }, []);

//   return (
//     <div>
//       <h2>Sales Forecast (2025)</h2>
//       <Line
//         data={chartData}
//         options={{
//           responsive: true,
//           scales: {
//             x: { title: { display: true, text: 'Date' }, type: 'category' },
//             y: { title: { display: true, text: 'Sales' }, type: 'linear' }
//           }
//         }}
//       />
//     </div>
//   );
// };

// export default ProductAnalysis;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ProductAnalysis = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: []
  });

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const response = await axios.post('http://localhost:3000/get-forecast', {
          sales_data: [
            { ds: '2023-01-01', y: 100 },
            { ds: '2023-01-02', y: 150 },
            { ds: '2023-01-03', y: 200 },
            { ds: '2023-01-04', y: 250 },
            // Add more sales data as needed
          ],
        });

        const forecast = response.data;

        console.log(forecast);  // Log data to check if it's coming correctly

        if (forecast && forecast.length > 0) {
          setChartData({
            labels: forecast.map(item => item.ds),  // Dates for x-axis
            datasets: [{
              label: 'Forecasted Sales',
              data: forecast.map(item => item.yhat),  // Forecasted sales for y-axis
              borderColor: 'rgba(75, 192, 192, 1)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              fill: true,
              pointBackgroundColor: 'rgba(75, 192, 192, 1)',
            }],
          });
        }
      } catch (error) {
        console.error("Error fetching forecast data", error);
      }
    };

    fetchForecast();
  }, []);

  return (
    <div>
      <h2>Sales Forecast (2025)</h2>
      <Line
        data={chartData}
        options={{
          responsive: true,
          scales: {
            x: {
              title: {
                display: true,
                text: 'Date',
              },
            },
            y: {
              title: {
                display: true,
                text: 'Sales',
              },
              beginAtZero: true,  // Ensure y-axis starts from 0
            },
          },
        }}
      />
    </div>
  );
};

export default ProductAnalysis;
