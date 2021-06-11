
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  
  var firebaseConfig = {
    apiKey: "AIzaSyBsVBxxgLZVXs84VIwRRAj1O5h9SX__yXs",
    authDomain: "vreach-4f764.firebaseapp.com",
    projectId: "vreach-4f764",
    storageBucket: "vreach-4f764.appspot.com",
    messagingSenderId: "384840735711",
    appId: "1:384840735711:web:13f87995f70d255a6f426a",
    measurementId: "G-33HT9LPX4Y"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



const auth = firebase.auth();

var provider = new auth.FacebookAuthProvider();



function signInFacebook (){

  auth
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // The signed-in user info.
    var user = result.user;

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var accessToken = credential.accessToken;

    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;

    // ...
  });
}

function signup(){
  var email = document.getElementById("userEmail");
  var password = document.getElementById("userPassword");

  const promise = auth.createUserWithEmailAndPassword(email.value , password.value);

  promise.catch (e => alert(e.message));

  alert("Signed Up")
}

function signIn(){

  var email = document.getElementById("userEmail");
  var password = document.getElementById("userPassword");

  const promise = auth.signInWithEmailAndPassword(email.value , password.value);

  promise.catch (e => alert(e.message));

  alert("Signed In" + email.value)


}

function signout(){
  auth.signout()
  alert("Signed out")
}

auth.onAuthStateChanged(function(user){
  if(user){

  }
  else{
    
  }
})