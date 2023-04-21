import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAGjk_RnlQoAPT1cud0yCMdtbwm40zb1T4",
  authDomain: "e-library-73761.firebaseapp.com",
  projectId: "e-library-73761",
  storageBucket: "e-library-73761.appspot.com",
  messagingSenderId: "897127069037",
  appId: "1:897127069037:web:e85b44c4fe3a0e2d0c9664"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
