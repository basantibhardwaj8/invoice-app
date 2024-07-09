// // import { Chart as ChartJS, registerables } from 'chart.js';
// // import { Chart } from 'react-chartjs-2'
// // ChartJS.register(...registerables);
// // import {Chart} from 'chart.js/auto';
// // import Chart from 'chart.js/auto';
// // // import Canvas from './Home/Canvas'
// // import Canvas from './Dashboard/home/Canvas'
// // import React, { useState,useEffect } from 'react';
// // import { collection, doc, getDocs } from 'firebase/firestore';
// // import {db} from '../../firebase'
// // import Canvas from './component/dashboard/home/Canvas'
// // import './Home.css'; // Import the CSS file
// import React, { useState, useEffect } from 'react';
// import { collection, getDocs } from 'firebase/firestore';
// import { db } from '../../firebase';
// import Chart from 'chart.js/auto'; // Import Chart from 'chart.js/auto'
// // import Canvas from './Dashboard/home/Canvas'; // Adjust the path based on your project structure

// const Home = () => {
//   const[total,setTotal]=useState(0)
//   const[totalnvoice,setTotalInvoice]=useState(2456)
//   const[totalMonthCollection,setTotalMonthCollection]=useState(4652)
//   const[invoices,setInvoices]=useState([])
  
//   useEffect(()=>{
//     getData()
//     createChart()
//   },[])
//   const getData = async () => {
//     try {
        
//         const querySnapshot = await getDocs(collection(db,'invoices'));
//         const fetchedInvoices = querySnapshot.docs.map(doc => ({
//             id: doc.id,
//             ...doc.data()
//         }));
//         setInvoices(fetchedInvoices);  // Assuming setInvoices is a function to set state or update state
//     } catch (error) {
//         console.error('Error fetching invoices: ', error);
//     }
//     getOverAllTotal()
// }
// const getOverAllTotal=()=>{
//   var t=0;
//   invoices.forEach(data=>{
//   console.log(data)
//     t +=data.total
//   })
//   setTotal(t)
  
// }
// //   const existingChart = document.getElementById('0');
// // existingChart.destroy();

//   const createChart=()=>{
//     const ctx = document.getElementById('myChart');
//     // Chart.getChart('myChart')
   

//   new Chart(ctx, {
//     type: 'bar',
//     data: {
//       labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//       datasets: [{
//         label: '# of Votes',
//         data: [12, 19, 3, 5, 2, 3],
//         borderWidth: 1
//       }]
//     },
//     options: {
//       scales: {
//         y: {
//           beginAtZero: true
//         }
//       }
//     }
//   });
//   }
//   return (
//     <div>
//       <div className='home-first-row'>
//         <div className='home-box home-box-1'>
//          <h1>Rs {total}</h1>
//          <p>overall</p>
//         </div>
//         <div className='home-box home-box-2'>
//         <h1>Rs{totalnvoice}</h1>
//         <p>overall</p>
//         </div>
//         <div className='home-box home-box-3'>
//         <h1>Rs{totalMonthCollection}</h1>
//         <p>overall</p>
//         </div>
//       </div>
//       <div className='home-second-row'>
//         <div className='chart-box'>
//           <Canvas id='myChart'></Canvas>
//         </div>
//         <div className='recent-invoice-list'>
// <h>Recent Invoice list</h>
// <div>
//   <p>Customer Name</p>
//   <p>10/04/2024</p>
// </div>
// <div>
//   <p>customer Name</p>
//   <p>10/09/2024</p>
// </div>
//        </div>

//       </div>
//     </div>
//   )
// }

// export default Home;

// import React, { useState, useEffect } from 'react';
// import { collection, getDocs } from 'firebase/firestore';
// import { db } from '../../firebase';
// import Chart from 'chart.js/auto'; // Import Chart from 'chart.js/auto'

// const Home = () => {
//   const [total, setTotal] = useState(0);
//   const [totalInvoice, setTotalInvoice] = useState(2456);
//   const [totalMonthCollection, setTotalMonthCollection] = useState(4652);
//   const [invoices, setInvoices ]= useState([])

//   useEffect(() => {
//     getData();
//   }, []);

//   const getData = async () => {
//     try {
//       const querySnapshot = await getDocs(collection(db, 'invoices'));
//       const fetchedInvoices = querySnapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data()
//       }));
//       setInvoices(fetchedInvoices);
//       getOverallTotal(fetchedInvoices);
//       createChart(); // Call createChart after fetching data
//     } catch (error) {
//       console.error('Error fetching invoices: ', error);
//     }
//   };

//   const getOverallTotal = (invoiceList) => {
//     let t = 0;
//     invoiceList.forEach(data => {
//       t += data.total;
//     });
//     setTotal(t);
//   }
//   const getTotalMonthCollection = (invoiceList) => {
//     let mt = 0;
//     invoiceList.forEach(data => {
//       // Check if the invoice is from the current month
//       const invoiceDate = new Date(data.date.seconds * 1000);
//       if (invoiceDate.getMonth() === new Date().getMonth()) {
//         mt += data.total;
//       }
//     });
//     setTotalMonthCollection(mt);
//   };
//   const createChart = (invoiceList) => {
//     const ctx = document.getElementById('myChart');

//     new Chart(ctx, {
//       type: 'bar',
//       data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//           label: '# of Votes',
//           data: [12, 19, 3, 5, 2, 3],
//           backgroundColor: [
//             'rgba(255, 99, 132, 0.2)',
//             'rgba(54, 162, 235, 0.2)',
//             'rgba(255, 206, 86, 0.2)',
//             'rgba(75, 192, 192, 0.2)',
//             'rgba(153, 102, 255, 0.2)',
//             'rgba(255, 159, 64, 0.2)'
//           ],
//           borderColor: [
//             'rgba(255, 99, 132, 1)',
//             'rgba(54, 162, 235, 1)',
//             'rgba(255, 206, 86, 1)',
//             'rgba(75, 192, 192, 1)',
//             'rgba(153, 102, 255, 1)',
//             'rgba(255, 159, 64, 1)'
//           ],
//           borderWidth: 1
//         }]
//       },
//       options: {
//         scales: {
//           y: {
//             beginAtZero: true
//           }
//         }
//       }
//     });
//   };

//   return (
//     <div>
//       <div className='home-first-row'>
//         <div className='home-box home-box-1'>
//           <h1>Rs {total}</h1>
//           <p>overall</p>
//         </div>
//         <div className='home-box home-box-2'>
//           <h1>Rs {totalInvoice}</h1>
//           <p>overall</p>
//         </div>
//         <div className='home-box home-box-3'>
//           <h1>Rs {totalMonthCollection}</h1>
//           <p>overall</p>
//         </div>
//       </div>
//       <div className='home-second-row'>
//         <div className='chart-box'>
//           <canvas id='myChart'></canvas> {/* Use <canvas> instead of <Canvas> */}
//         </div>
//         <div className='recent-invoice-list'>
//           <h2 className='recent-invoice-list1'>Recent Invoice List</h2>
          
//           <div className='recent-invoice p'>
//             <p>Customer Name</p>
//             <p>10/04/2024</p>
//           </div>
//           <div>
//             <p>Customer Name</p>
//             <p>10/09/2024</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React, { useState, useEffect } from 'react';
// import { collection, getDocs } from 'firebase/firestore';
// import { db } from '../../firebase';
// import Chart from 'chart.js/auto'; // Import Chart from 'chart.js/auto'

// const Home = () => {
//   const [total, setTotal] = useState(0);
//   const [totalInvoice, setTotalInvoice] = useState(2456);
//   const [totalMonthCollection, setTotalMonthCollection] = useState(56565);
//   const [invoices, setInvoices] = useState([]);

//   useEffect(() => {
//     getData();
//   }, []);

//   const getData = async () => {
//     try {
//       const querySnapshot = await getDocs(collection(db, 'invoices'));
//       const fetchedInvoices = querySnapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data(),
//         date: doc.data().date.toDate() // Convert Firestore Timestamp to JavaScript Date
//       }));
//       setInvoices(fetchedInvoices);
//       getOverallTotal(fetchedInvoices);
//       getTotalMonthCollection(fetchedInvoices);
//       createChart(); // Call createChart after fetching data
//     } catch (error) {
//       console.error('Error fetching invoices: ', error);
//     }
//   };

//   const getOverallTotal = (invoiceList) => {
//     let t = 0;
//     invoiceList.forEach(data => {
//       t += data.total;
//     });
//     setTotal(t);
//   };

//   const getTotalMonthCollection = (invoiceList) => {
//     let mt = 0;
//     const currentMonth = new Date().getMonth();
//     invoiceList.forEach(data => {
//       // Check if the invoice is from the current month
//       const invoiceDate = data.date;
//       if (invoiceDate.getMonth() === currentMonth) {
//         mt += data.total;
//       }
//     });
//     setTotalMonthCollection(mt);
//   };

//   const createChart = () => {
//     const ctx = document.getElementById('myChart');

//     new Chart(ctx, {
//       type: 'bar',
//       data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//           label: '# of Votes',
//           data: [12, 19, 3, 5, 2, 3],
//           backgroundColor: [
//             'rgba(255, 99, 132, 0.2)',
//             'rgba(54, 162, 235, 0.2)',
//             'rgba(255, 206, 86, 0.2)',
//             'rgba(75, 192, 192, 0.2)',
//             'rgba(153, 102, 255, 0.2)',
//             'rgba(255, 159, 64, 0.2)'
//           ],
//           borderColor: [
//             'rgba(255, 99, 132, 1)',
//             'rgba(54, 162, 235, 1)',
//             'rgba(255, 206, 86, 1)',
//             'rgba(75, 192, 192, 1)',
//             'rgba(153, 102, 255, 1)',
//             'rgba(255, 159, 64, 1)'
//           ],
//           borderWidth: 1
//         }]
//       },
//       options: {
//         scales: {
//           y: {
//             beginAtZero: true
//           }
//         }
//       }
//     });
//   };

//   return (
//     <div>
//       <div className='home-first-row'>
//         <div className='home-box home-box-1'>
//           <h1>Rs {total}</h1>
//           <p>overall</p>
//         </div>
//         <div className='home-box home-box-2'>
//           <h1>Rs {totalInvoice}</h1>
//           <p>overall</p>
//         </div>
//         <div className='home-box home-box-3'>
//           <h1>Rs {totalMonthCollection}</h1>
//           <p>overall</p>
//         </div>
//       </div>
//       <div className='home-second-row'>
//         <div className='chart-box'>
//           <canvas id='myChart'></canvas>
//         </div>
//         <div className='recent-invoice-list'>
//           <h2 className='recent-invoice-list1'>Recent Invoice List</h2>
//           {invoices.map((invoice) => (
//             <div key={invoice.id} className='recent-invoice'>
//               <p>Customer: {invoice.customerName}</p>
//               <p>Date: {invoice.date.toLocaleDateString()}</p>
//               <p>Total: {invoice.total}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import Chart from 'chart.js/auto'; // Import Chart from 'chart.js/auto'

const Home = () => {
  const [total, setTotal] = useState(0);
  const [totalInvoice, setTotalInvoice] = useState(2456);
  const [totalMonthCollection, setTotalMonthCollection] = useState(5658565); // Initialize to 0 initially
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'invoices'));
      const fetchedInvoices = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        date: doc.data().date.toDate() // Convert Firestore Timestamp to JavaScript Date
      }));
      setInvoices(fetchedInvoices);
      getOverallTotal(fetchedInvoices);
      getTotalMonthCollection(fetchedInvoices);
      createChart(); // Call createChart after fetching data
    } catch (error) {
      console.error('Error fetching invoices: ', error);
    }
  };

  const getOverallTotal = (invoiceList) => {
    let t = 0;
    invoiceList.forEach(data => {
      t += data.total;
    });
    setTotal(t);
  };

  const getTotalMonthCollection = (invoiceList) => {
    let mt = 0;
    const currentMonth = new Date().getMonth();
    invoiceList.forEach(data => {
      // Check if the invoice is from the current month
      const invoiceDate = data.date;
      if (invoiceDate.getMonth() === currentMonth) {
        mt += data.total;
      }
    });
    setTotalMonthCollection(mt);
  };

  const createChart = () => {
    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  };

  return (
    <div>
      <div className='home-first-row'>
        <div className='home-box home-box-1'>
          <h1>Rs {total}</h1>
          <p>overall</p>
        </div>
        <div className='home-box home-box-2'>
          <h1>Rs {totalInvoice}</h1>
          <p>overall</p>
        </div>
        <div className='home-box home-box-3'>
          <h1>Rs {totalMonthCollection}</h1>
          <p>overall</p>
        </div>
      </div>
      <div className='home-second-row'>
        <div className='chart-box'>
          <canvas id='myChart'></canvas>
        </div>
        <div className='recent-invoice-list'>
          <h2 className='recent-invoice-list1'>Recent Invoice List</h2>
          {invoices.map((invoice) => (
            <div key={invoice.id} className='recent-invoice'>
              <p>Customer: {invoice.customerName}</p>
              <p>Date: {invoice.date.toLocaleDateString()}</p>
              <p>Total: {invoice.total}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

