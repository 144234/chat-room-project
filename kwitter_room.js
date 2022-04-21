
//ADD YOUR FIREBASE LINKS HERE
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6-qtXZwCcL9OvZC-LFcPeFB5UKJAagJA",
  authDomain: "kwitter-app-f091e.firebaseapp.com",
  databaseURL: "https://kwitter-app-f091e-default-rtdb.firebaseio.com",
  projectId: "kwitter-app-f091e",
  storageBucket: "kwitter-app-f091e.appspot.com",
  messagingSenderId: "9156660968",
  appId: "1:9156660968:web:0dd2ea267dfad8d1c8c35d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
