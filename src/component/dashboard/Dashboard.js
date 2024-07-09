// import React from 'react';
// import './dashboard.css';
// import { Link, useNavigate } from 'react-router-dom';
// import {auth} from '../../firebase'
// import { signOut } from 'firebase/auth';
// // import {useHistory} from 'react-router-dom'

// const Dashboard = () => {
//   const navigate=useNavigate()
//   const logOut=()=>{
//     signOut(auth).then(() => {
//     localStorage.clear()
    
//     })
//     .catch((error) =>{
// console.log(error)
//     })
      
//   }
//   return (
//     <div className='dashboard-wrapper'>
//       <div className='side-nav'>
//         <div className='profile-info'>
//           {/* Example profile info */}
//           <img src={localStorage.getItem('hlo')} alt="Profile" />
//           <div>
//             <p>{localStorage.getItem('cname')}</p>
//             navigate('/dashboard/Login')
//             {/* <button onClick={() => {
//               // Handle logout logic
//               localStorage.removeItem('photoUrl');
//               localStorage.removeItem('cname');
//               // Example: redirect to login page
//               // history.push('/login');
//             }}>Logout</button> */}
//             <button onClick={logOut}>Logout</button>
          
//           </div>
//         </div>
//         <hr />
//         <Link to="/dashboard/home" className='menu-link'>Home</Link>
//         <Link to="/dashboard/invoice" className='menu-link'>Invoices</Link>
//         <Link to="/dashboard/newInvoice" className='menu-link'>New Invoice</Link>
//         <Link to="/dashboard/settings" className='menu-link'>Settings</Link>
//       </div>
//       <div className='main-container'>
//         <p>Hello, world!</p>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React from 'react';
import './dashboard.css';
import { Link,useNavigate } from 'react-router-dom'; // Import useHistory
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';
import img1 from '../../assets/hlo.jpeg';

const Dashboard = () => {
  //const history = useHistory();
   // Get history object
   //const navigate=useNavigate();
   const history = useNavigate();
  const logOut = () => {
    signOut(auth)
      .then(() => {
        localStorage.clear();
        history('/Login'); // Redirect to login page
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='dashboard-wrapper'>
      <div className='side-nav'>
        <div className='profile-info'>
         {/* // <img src={localStorage.getItem('img1')} alt="Profile" /> */}
         <img src={img1} alt="Profile" />
        
          <div>
            <p>{localStorage.getItem('cname')}</p>
            <button onClick={logOut}>Logout</button>
          </div>
        </div>
        <hr />
        <Link to="/dashboard/home" className='menu-link'>Home</Link>
        <Link to="/dashboard/invoice" className='menu-link'>Invoices</Link>
        <Link to="/dashboard/newInvoice" className='menu-link'>New Invoice</Link>
        <Link to="/dashboard/settings" className='menu-link'>Settings</Link>
      </div>
      <div className='main-container'>
        <p>Hello, world!</p>
      </div>
    </div>
  );
};

export default Dashboard;
