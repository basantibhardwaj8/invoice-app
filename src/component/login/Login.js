// import React, { useState } from 'react';
// import './login.css' // Assuming you have defined CSS styles
// import { Link ,useNavigate} from 'react-router-dom';
// import { signInWithEmailAndPassword} from 'firebase/auth'; // Adjust according to your Firebase setup
//  import {auth} from '../../firebase'
// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);
//   const history = useNavigate();

//   const submitHandler = async (e) => {
//     e.preventDefault();

//     try {
      
//       const userCredential = await signInWithEmailAndPassword(auth,email, password);
//       const user = userCredential.user;
// console.log(user)
//       // Example: Store user data in localStorage
//       //localStorage.setItem('userId', user.uid);
//      // localStorage.setItem('password', user.password);
//      localStorage.setItem('cName', user.displayName);
//      localStorage.setItem('photoURL', user.photoURL);
//       localStorage.setItem('email', user.email);
//       localStorage.setItem('uid',user.uid)
// history('/dashboard');
//       // Redirect or handle successful login as needed
//     } catch (error) {
//       setError(error.message);
//       console.error('Error signing in:', error);
//     }
   
//   };

//   return (
//     <div className='login-wrapper'>
//       <div className='container'>
//         <div className='login-left-box'>
//           {/* Content for left box */}
//         </div>
//         <div className='login-box'>
//           <h1>Login</h1>
//           {error && <p className="error-message">{error}</p>}
//           <form onSubmit={submitHandler}>
//             <input
//               type='text'
//               placeholder='Email'
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             /><br/>
//             <input
//               type='password'
//               placeholder='Password'
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             /><br/>
//             <button type='submit' className='login-btn'>Submit</button>
//           </form>
//           <Link to='/register' className='register-link'>Create an account</Link>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Login;

// import React, { useState } from 'react';
// import './login.css'; // Assuming you have defined CSS styles
// import { Link, Navigate, useNavigate } from 'react-router-dom';
// import { signInWithEmailAndPassword } from 'firebase/auth'; // Adjust according to your Firebase setup
// import { auth } from '../../firebase';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);
// const navigate=useNavigate()
  // const submitHandler = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const userCredential = await signInWithEmailAndPassword(auth, email, password);
  //     const user = userCredential.user;
  //     // Example: Store user data in localStorage
  //     localStorage.setItem('userId', user.uid);
  //     localStorage.setItem('password', user.password);
  //     localStorage.setItem('email', user.email);
  //     console.log('User logged in:', user);
  //     // Redirect or handle successful login as needed
  //     Navigate('/dashboard')
  //   } catch (error) {
  //     setError(error.message);
  //     console.error('Error signing in:', error);
  //   }
  // };
//   const submitHandler = async (e) => {
//     e.preventDefault();
//     try {
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;
//       console.log('User logged in:', user);
//       // Handle successful login
//       navigate('/dashboard'); // Use navigate from react-router-dom
//     } catch (error) {
//       setError(error.message);
//       console.error('Error signing in:', error);
//     }
//   };
//   return (
//     <div className='login-wrapper'>
//       <div className='container'>
//         <div className='login-left-box'>
//           {/* Content for left box */}
//         </div>
//         <div className='login-box'>
//           <h1>Login</h1>
//           {error && <p className="error-message">{error}</p>}
//           <form onSubmit={submitHandler}>
//             <input
//               type='text'
//               placeholder='Email'
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             /><br/>
//             <input
//               type='password' 
//               placeholder='Password'
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             /><br/>
//             <button type='submit' className='login-btn'>Submit</button>
//           </form>
//           <Link to='/register' className='register-link'>
//             Create an account
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from 'react';
 import './login.css'; // Assuming you have defined CSS styles
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth'; // Assuming correct Firebase import
// import { auth } from '../../firebase';// Assuming correct Firebase import
import { auth } from '../../firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Correct usage of useNavigate()

  const submitHandler =  (e) => {
    e.preventDefault();
  //   try {
  //     const userCredential = await signInWithEmailAndPassword(auth, email, password);
  //     const user = userCredential.user;
      
  //     // Example: Store user data in localStorage
  //     // localStorage.setItem('userId', user.uid);
  //     localStorage.setItem('email', user.email);
  //     // Additional data storage if needed

  //     console.log('User logged in:', user);

  //     // Redirect to dashboard after successful login
  //     navigate('/dashboard');
  //   } catch (error) {
  //     setError(error.message);
  //     console.error('Error signing in:', error);
  //   }
  // };
  signInWithEmailAndPassword(auth,email,password)
  .then((userCredential)=>{
    const user=userCredential.user;
    console.log(user)
     navigate('/dashboard');
  })
  
  .catch((error)=>{
    console.log(error)

  })
}

  return (
    <div className='login-wrapper'>
      <div className='container'>
        <div className='login-left-box'>
          {/* Content for left box */}
        </div>
        <div className='login-box'>
          <h1>Login</h1>
          {error && <p className="error-message">{error}</p>}
          <form onSubmit={submitHandler}>
            <input
              type='text'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            /><br/>
            <input
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            /><br/>
            <button type='submit' className='login-btn'>Submit</button>
          </form>
          <Link to='/register' className='register-link'>
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Login;

