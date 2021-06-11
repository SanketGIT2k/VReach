const signUp = document.querySelector("#signUp");

import firebase from "firebase/app";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyBsVBxxgLZVXs84VIwRRAj1O5h9SX__yXs",
  authDomain: "vreach-4f764.firebaseapp.com",
  projectId: "vreach-4f764",
  storageBucket: "vreach-4f764.appspot.com",
  messagingSenderId: "384840735711",
  appId: "1:384840735711:web:13f87995f70d255a6f426a",
  measurementId: "G-33HT9LPX4Y",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


signUp.addEventListener("click", ()=>{
    var email = document.getElementById("userEmail").value;
    var password = document.getElementById("userPassword").value;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function () {
        alert("Registration Successful");
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errormsg = error.message;
      });
  })