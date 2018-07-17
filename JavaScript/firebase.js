// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBDKlE_B7uqAYiRBWAobvsiVOI_pzL7N7g",
    authDomain: "chat-72fb4.firebaseapp.com",
    databaseURL: "https://chat-72fb4.firebaseio.com",
    projectId: "chat-72fb4",
    storageBucket: "chat-72fb4.appspot.com",
    messagingSenderId: "478181109755"
  };
  firebase.initializeApp(config);

  const database = firebase.database();