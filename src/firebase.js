// // Import the functions you need from the SDK
// // TODO: Add SDKs for Firebase product s that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
// import { initializeApp } from "firebase/app";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { getdb } from "firebase/db";
// import { getStorage } from "firebase/storage";
//basanti

// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage,uploadBytesResumable } from "firebase/storage";
// import { updateProfile as getupdateProfile } from "firebase/auth"; // Adjust as per your Firebase setup for profile update
import { initializeApp } from "firebase/app";
 import { getAuth, updateProfile as updateProfileFirebase } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
 import { getStorage,ref, uploadBytesResumable } from "firebase/storage";




// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRuC3sR6oFqZJkiEwj2lanWG2eAWmB-dQ",
  authDomain: "invoice-9061c.firebaseapp.com",
  projectId: "invoice-9061c",
  storageBucket: "invoice-9061c.appspot.com",
  messagingSenderId: "7383794124",
  appId: "1:7383794124:web:8ddd3a93729610a24cdd69",
  measurementId: "G-HH8YR5D2LF"// Initialize Firebase
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize Firebase Auth
const db = getFirestore(app); // Initialize Firestore Database
const storage = getStorage(app); // Initialize Firebase Storage
// const updateProfile = getupdateProfile(auth);
// const  uploadBytesResumable=getuploadBytesResumable(auth);
const uploadBytes = uploadBytesResumable;
const updateProfile = (displayName) => {
  if (!auth.currentUser) {
    console.error('User not authenticated.');
    return;
  }

  updateProfileFirebase(auth.currentUser, { displayName })
    .then(() => {
      console.log('Profile updated successfully');
      // Update local storage or perform any other operations
      localStorage.setItem('Name', displayName);
      window.location.reload(); // Reload the page after profile update
    })
    .catch((error) => {
      console.error('Error updating profile:', error);
    });
};

// Function to update profile picture
const updateProfilePicture = (file) => {
  if (!file) {
    console.error('No file selected.');
    return;
  }

  const fileRef = ref(storage, `profiles/${auth.currentUser.uid}/profile.jpg`);
  const uploadTask = uploadBytesResumable(fileRef, file);

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


// Export the initialized app and other Firebase services you use

export { app, auth, db, storage,updateProfile,uploadBytesResumable };
// Initialize Firebase

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getdb(app);
// const storage = getStorage(app);
// export { app, auth, db, storage, signInWithEmailAndPassword };
