// // // import React, { useState } from 'react'
// // //  import './settings.css';
// // // const Settings = () => {
// // //   const [email, setEmail] = useState(localStorage.getItem('email'));
// // //   const [password, setPassword] = useState('');
// // //   const [file, setFile] = useState(null); // Initialize file state
// // //   const [displayName, setDisplayName] = useState(localStorage.getItem('Name'));
// // //   const[imageUrl,setImageUrl]=useState(localStorage.getItem('photoUrl'))
// // //   const updateCompany=()=>{
// // //     updateProfile(auth.currentUser,{
// // //         displayName:displayName
// // //     })
// // //     .then(res=>{
// // //     window.location.reload()
// // //     localStorage.setItem('name')
// // //     })
// // //   }
// // //   const onSelectFile=(e)=>{
// // //     setFile(e.target.files[0])
// // //     setImageUrl(URL.createObjectURL(e.target.file[0]))
// // //   }

// // // const updateLogo=()=>{
// // //   const file=storage.refFromURL(localStorage.getItem('photoURL'))
// // // console.log(fileRef._location.path_)
// // // const storageRef=ref(Storage,fileRef._location.path_)
// // // uploadBytesResumable(storageRef,file)
// // // .then(result=>{
// // //     window.location.reload();
// // // })
// // //   console.log(file)
// // // }
// // //   return (
// // //     <div>
// // //      <p>settings</p>
// // //      <div className='setting-wrapper'>
// // // <img className='pro' alt='profile-pic' src={imageUrl}/>
// // // <input onChange={(e)=>{onSelectFile(e)}} type='file'/>
// // // <button onClick={()=>{updateLogo()}}>Update  Profile Pic</button>
// // //     </div>
// // //     <div>
// // //         <input onChange={e=>{setDisplayName(e.target.value)}} type='text' placeholder='company name' value={displayName}></input>
// // //     </div>
// // //     </div>
// // //   )
// // // }
// // // export default Settings

// // // import React, { useState } from 'react';
// // // import './settings.css';
// // // import { auth, updateProfile, storage, ref, uploadBytesResumable } from '../../firebase'; // Adjust import as per your Firebase setup

// // // const Settings = () => {
// // //   const [email, setEmail] = useState(localStorage.getItem('email') || '');
// // //   const [displayName, setDisplayName] = useState(localStorage.getItem('Name') || '');
// // //   const [imageUrl, setImageUrl] = useState(localStorage.getItem('photoUrl') || '');
// // //   const [file, setFile] = useState(null);

// // //   const onSelectFile = (e) => {
// // //     setFile(e.target.files[0]);
// // //     setImageUrl(URL.createObjectURL(e.target.files[0]));
// // //   };

// // //   const updateLogo = () => {
// // //     const fileRef = storage.ref().child('path/to/profile.jpeg'); // Adjust path as per your storage structure
// // //     uploadBytesResumable(fileRef, file)
// // //       .then((snapshot) => {
// // //         console.log('File uploaded successfully');
// // //         window.location.reload();
// // //       })
// // //       .catch((error) => {
// // //         console.error('Error uploading file:', error);
// // //       });
// // //   };

// // //   const updateCompany = () => {
// // //     if (!auth.currentUser) {
// // //       console.error('User is not authenticated.');
// // //       return;
// // //     }
  
// // //     console.log('Updating profile with displayName:', displayName);
// // //     updateProfile(auth.currentUser, {
// // //       displayName: displayName
// // //     })
// // //       .then(() => {
// // //         console.log('Profile updated successfully');
// // //         localStorage.setItem('Name', displayName);
// // //         window.location.reload();
// // //       })
// // //       .catch((error) => {
// // //         console.error('Error updating profile:', error);
// // //       });
// // //   };
  

// // //   return (
// // //     <div>
// // //       <p>Settings</p>
// // //       <div className='setting-wrapper'>
// // //         <img className='pro' alt='profile-pic' src={imageUrl} />
// // //         <input onChange={(e) => onSelectFile(e)} type='file' />
// // //         <button onClick={() => updateLogo()}>Update Profile Pic</button>
// // //       </div>
// // //       <div>
// // //         <input
// // //           onChange={(e) => setDisplayName(e.target.value)}
// // //           type='text'
// // //           placeholder='Company Name'
// // //           value={displayName}
// // //         />
// // //         <button onClick={() => updateCompany()}>Update Company Name</button>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Settings;

// // import React, { useState } from 'react';
// // import './settings.css';
// // import { auth, storage } from '../../firebase'; // Adjust import as per your Firebase setup

// // const Settings = () => {
// //   const [displayName, setDisplayName] = useState(localStorage.getItem('Name') || '');
// //   const [file, setFile] = useState(null);

// //   const onSelectFile = (e) => {
// //     setFile(e.target.files[0]);
// //   };

// //   const updateLogo = () => {
// //     if (!file) {
// //       console.error('No file selected.');
// //       return;
// //     }

// //     const fileRef = storage.ref().child('path/to/img1.jpg'); // Adjust path as per your storage structure
// //     const uploadTask = fileRef.put(file);

// //     uploadTask.on('state_changed',
// //       (snapshot) => {
// //         // Handle progress or other state changes if needed
// //       },
// //       (error) => {
// //         console.error('Error uploading file:', error);
// //       },
// //       () => {
// //         // Handle successful upload
// //         console.log('File uploaded successfully');
// //         uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
// //           console.log('File available at', downloadURL);
// //           // Handle further operations with downloadURL if needed
// //           window.location.reload(); // Reload the page after successful upload
// //         });
// //       }
// //     );
// //   };

// //   const updateCompany = () => {
// //     if (!auth.currentUser) {
// //       console.error('User is not authenticated.');
// //       return;
// //     }

// //     auth.currentUser.updateProfile({
// //       displayName: displayName
// //     }).then(() => {
// //       console.log('Profile updated successfully');
// //       localStorage.setItem('Name', displayName);
// //       window.location.reload(); // Reload the page after profile update
// //     }).catch((error) => {
// //       console.error('Error updating profile:', error);
// //     });
// //   };

// //   return (
// //     <div>
// //       <p>Settings</p>
// //       <div className='setting-wrapper'>
// //         {/* Display profile picture here */}
// //         <input onChange={onSelectFile} type='file' />
// //         <button onClick={updateLogo}>Update Profile Pic</button>
// //       </div>
// //       <div>
// //         <input
// //           onChange={(e) => setDisplayName(e.target.value)}
// //           type='text'
// //           placeholder='Company Name'
// //           value={displayName}
// //         />
// //         <button onClick={updateCompany}>Update Company Name</button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Settings;

// import React, { useState } from 'react';
// import './settings.css';
// import { auth, storage } from '../../firebase'; // Adjust import as per your Firebase setup

// const Settings = () => {
//   const [displayName, setDisplayName] = useState(localStorage.getItem('Name') || '');
//   const [file, setFile] = useState(null);

//   // Function to handle file selection for profile picture
//   const onSelectFile = (e) => {
//     setFile(e.target.files[0]); // Set the selected file to state
//   };

//   // Function to update profile picture
//   const updateLogo = () => {
//     if (!file) {
//       console.error('No file selected.');
//       return;
//     }

//     const fileRef = storage.ref().child(`profiles/${auth.currentUser.uid}/profile.jpg`); // Adjust path as per your storage structure
//     const uploadTask = fileRef.put(file); // Upload the selected file

//     uploadTask.on(
//       'state_changed',
//       (snapshot) => {
//         // Handle progress or other state changes if needed
//       },
//       (error) => {
//         console.error('Error uploading file:', error);
//       },
//       () => {
//         // Handle successful upload
//         console.log('File uploaded successfully');
//         uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
//           console.log('File available at', downloadURL);
//           // Update profile photo URL in localStorage or database if needed
//           window.location.reload(); // Reload the page after successful upload
//         });
//       }
//     );
//   };

//   // Function to update company name or display name
//   const updateCompany = () => {
//     if (!auth.currentUser) {
//       console.error('User is not authenticated.');
//       return;
//     }

//     auth.currentUser
//       .updateProfile({
//         displayName: displayName || {},
//       })
//       .then(() => {
//         console.log('Profile updated successfully');
//         localStorage.setItem('Name', displayName); // Update local storage with new display name
//         window.location.reload(); // Reload the page after profile update
//       })
//       .catch((error) => {
//         console.error('Error updating profile:', error);
//       });
//   };

//   return (
//     <div>
//       <p>Settings</p>
//       <div className='setting-wrapper'>
//         {/* Display current profile picture here */}
//         <input onChange={onSelectFile} type='file' /> {/* File input for selecting new profile picture */}
//         <button onClick={updateLogo}>Update Profile Pic</button> {/* Button to update profile picture */}
//       </div>
//       <div>
//         <input
//           onChange={(e) => setDisplayName(e.target.value)}
//           type='text'
//           placeholder='Company Name'
//           value={displayName}
//         /> {/* Input field to update company name or display name */}
//         <button onClick={updateCompany}>Update Company Name</button> {/* Button to update company name or display name */}
//       </div>
//     </div>
//   );
// };

// export default Settings;
import React, { useState } from 'react';
import './settings.css';
import { auth, storage } from '../../firebase'; // Adjust import as per your Firebase setup
import { ref } from 'firebase/storage';

const Settings = () => {
  const [displayName, setDisplayName] = useState(localStorage.getItem('Name') || ''); // State to manage display name
  const [file, setFile] = useState(null); // State to manage selected file for profile picture

  // Function to handle file selection for profile picture
  const onSelectFile = (e) => {
    setFile(e.target.files[0]); // Set the selected file to state
  };

  // Function to update profile picture
  const updateProfile = () => {
    if (!file) {
      console.error('No file selected.');
      return;
    }

    // const fileRef = storage.ref().child(`profiles/${auth.currentUser}/hlo.jpg`); // Adjust path as per your storage structure
    // const uploadTask = fileRef.put(file); // Upload the selected file
    const fileRef = ref(storage, 'path/to/hlo.jpg');
    const uploadTask = fileRef.put(file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Handle progress or other state changes if needed
      },
      (error) => {
        console.error('Error uploading file:', error);
      },
      () => {
        // Handle successful upload
        console.log('File uploaded successfully');
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log('File available at', downloadURL);
          // Update profile photo URL in localStorage or database if needed
          window.location.reload(); // Reload the page after successful upload
        });
      }
    );
  };

  // Function to update company name or display name
  const updateCompany = () => {
    const user = auth.currentUser;
    if (!user) {
      console.error('User not authenticated.');
      return;
    }
  
    // Proceed with updating the user's profile
    user.updateProfile({
      displayName: displayName || user.displayName,
    }).then(() => {
      console.log('Profile updated successfully');
      localStorage.setItem('Name', displayName); // Update local storage with new display name
      window.location.reload(); // Reload the page after profile update
    }).catch((error) => {
      console.error('Error updating profile:', error);
    });
  };
  
  return (
    <div>
      <p>Settings</p>
      <div className='setting-wrapper'>
        {/* Display current profile picture here */}
        {/* File input for selecting new profile picture */}
        <input onChange={onSelectFile} type='file' />
        {/* Button to update profile picture */}
        <button onClick={updateProfile}>Update Profile Pic</button>
      </div>
      <div>
        {/* Input field to update company name or display name */}
        <input
          onChange={(e) => setDisplayName(e.target.value)}
          type='text'
          placeholder='Company Name'
          value={displayName}
        />
        {/* Button to update company name or display name */}
        <button onClick={updateCompany}>Update Company Name</button>
      </div>
    </div>
  );
};

export default Settings;
