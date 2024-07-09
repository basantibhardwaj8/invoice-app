// import React, { useRef, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './register.css'; // Assuming you have a register.css file for styling
// import { auth, storage } from '../../firebase'; // Importing your firebase config
// import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
// import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'; // Correct imports for Firebase storage

// const Register = () => {
//   const fileInputRef = useRef(null);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [file, setFile] = useState(null); // Initialize file state
//   const [displayName, setDisplayName] = useState('');
// const navigate=useNavigate()
//   const submitHandler = (e) => {
//     e.preventDefault();
//     console.log(email, password, file, displayName);


//     createUserWithEmailAndPassword(auth, email, password)
//       .then((newUserCredential) => {
//         const newUser = newUserCredential.user;
//         console.log('New user:', newUser);
      

//         // // Assuming you want to upload the file to Firebase Storage
//         const date = new Date().getTime();
//         const storageRef = ref(storage, `${displayName}_${date}`);
//         uploadBytes(storageRef, file)
//           .then((snapshot) => {
//             console.log('File uploaded successfully');
//             getDownloadURL(snapshot.ref)
//               .then((downloadURL) => {
//                 console.log('File available at:', downloadURL);
//                 // Perform any additional actions here
//                 // Update user profile example:
//                 updateProfile(newUser, {
//                   displayName: displayName,
//                   photoURL: downloadURL // Assuming you want to store the file URL in user's profile
//                 }).then(() => {
//                   console.log('User profile updated');
//                   navigate('/dashboard')
//                   // You can redirect or perform other actions upon successful registration
//                 }).catch((error) => {
//                   console.error('Error updating profile:', error.message);
//                 });
//         //       }).catch((error) => {
//         //         console.error('Error getting download URL:', error.message);
//               });
//           }).catch((error) => {
//             console.error('Error uploading file:', error.message);
//           });
//       })
//       .catch((error) => {
//         console.error('Error registering user:', error.message);
//       });
//   };

// // fdfasdfada@gmail.com  123456789

//   return (
//     <div className='register-wrapper'>
//       <div className='container'>
//         <div className='register-left-box'>
//           {/* Left box content (if any) */}
//         </div>
//         <div className='register-box'>
//           <h1>Create account</h1>
//           <form onSubmit={submitHandler}>
//             <input
//               onChange={(e) => setEmail(e.target.value)}
//               className='login-input'
//               type='text'
//               placeholder='Email'
//               required
//             /><br />
//             <input
//               onChange={(e) => setPassword(e.target.value)}
//               className='login-input'
//               type='password'
//               autoComplete='off'
//               placeholder='Password'
//               required
//             /><br />
//             <input
//               onChange={(e) => setDisplayName(e.target.value)}
//               className='login-input'
//               type='text'
//               placeholder='Company Name'
//             /><br />
//             <input
//               onChange={(e) => setFile(e.target.files[0])}
//               ref={fileInputRef}
//               className='login-input'
//               type='file'
//               placeholder='Choose a file'
//             /><br />
//             <button type='submit' className='register-btn'>Submit</button>
//           </form>
//           <Link to='/login' className='register-link'>
//             Already have an account? Login here
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;


//   // createUserWithEmailAndPassword(auth, email, password)
//   //     .then((newUserCredential) => {
//   //       const newUser = newUserCredential.user;
//   //       console.log('New user:', newUser);
//   //       const date = new Date().getTime();
//   //       console.log(date)

//   //     })
//   //      .catch((error) => {
//       //   console.error('Error registering user:', error.message);
//       // });
import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './register.css'; // Assuming you have a register.css file for styling
import { auth, storage } from '../../firebase'; // Importing your firebase config
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const Register = () => {
  const fileInputRef = useRef(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [file, setFile] = useState(null);
  const [displayName, setDisplayName] = useState('');
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((newUserCredential) => {
        const newUser = newUserCredential.user;
        console.log('New user:', newUser);

        const date = new Date().getTime();
        const storageRef = ref(storage, `${displayName}_${date}`);
        
        // Upload file to Firebase Storage
        uploadBytes(storageRef, file)
          .then((snapshot) => {
            console.log('File uploaded successfully');
            getDownloadURL(snapshot.ref)
              .then((downloadURL) => {
                console.log('File available at:', downloadURL);

                // Update user profile with display name and photo URL
                updateProfile(newUser, {
                  displayName: displayName,
                  photoURL: downloadURL
                }).then(() => {
                  console.log('User profile updated');
                  navigate('/dashboard'); // Redirect to dashboard after successful registration
                }).catch((error) => {
                  console.error('Error updating profile:', error.message);
                });
              }).catch((error) => {
                console.error('Error getting download URL:', error.message);
              });
          }).catch((error) => {
            console.error('Error uploading file:', error.message);
          });
      })
      .catch((error) => {
        console.error('Error registering user:', error.message);
      });
  };

  return (
    <div className='register-wrapper'>
      <div className='container'>
        <div className='register-left-box'>
          {/* Left box content (if any) */}
        </div>
        <div className='register-box'>
          <h1>Create account</h1>
          <form onSubmit={submitHandler}>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className='login-input'
              type='text'
              placeholder='Email'
              required
            /><br />
            <input
              onChange={(e) => setPassword(e.target.value)}
              className='login-input'
              type='password'
              autoComplete='off'
              placeholder='Password'
              required
            /><br />
            <input
              onChange={(e) => setDisplayName(e.target.value)}
              className='login-input'
              type='text'
              placeholder='Company Name'
            /><br />
            <input
              onChange={(e) => setFile(e.target.files[0])}
              ref={fileInputRef}
              className='login-input'
              type='file'
              placeholder='Choose a file'
            /><br />
            <button type='submit' className='register-btn'>Submit</button>
          </form>
          <Link to='/login' className='register-link'>
            Already have an account? Login here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
