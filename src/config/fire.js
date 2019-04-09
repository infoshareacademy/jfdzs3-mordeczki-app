import firebase from 'firebase';

  const config = {
    apiKey: "AIzaSyB22ykC5k1kNsd7ZR_YdeezXG4CNNXL2iE",
    authDomain: "bjuty-app.firebaseapp.com",
    databaseURL: "https://bjuty-app.firebaseio.com",
    projectId: "bjuty-app",
    storageBucket: "bjuty-app.appspot.com",
    messagingSenderId: "387057660886"
  };
  const fire = firebase.initializeApp(config);
  export default fire;
