  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB_fCrqzAGkDkAYDtdtERw_IMwoCgmkrJQ",
    authDomain: "lqlk-5370b.firebaseapp.com",
    databaseURL: "https://lqlk-5370b.firebaseio.com",
    projectId: "lqlk-5370b",
    storageBucket: "lqlk-5370b.appspot.com",
    messagingSenderId: "612878491224",
    appId: "1:612878491224:web:be9732520ddf14b97c742d",
    measurementId: "G-0QQYMZPR82"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var firestore = firebase.firestore();

  const mainDocRef = firestore.doc("main/live")

    mainDocRef.onSnapshot(function(doc) {

      if(doc.data().team == 'mcg'){
        document.getElementById("Batting").innerHTML = "Mahinda College";
      }else if(doc.data().team == 'rcg'){
        document.getElementById("Batting").innerHTML = "Richmond College";
      }

      document.getElementById("score").innerHTML = doc.data().score;
      document.getElementById("wickets").innerHTML = doc.data().wickets;

      var overs = Math.floor(doc.data().balls/6)
      var balls = overs+(doc.data().balls%6)/10

      document.getElementById("overs").innerHTML = balls;
      //document.getElementById("balls").innerHTML = balls;
        console.log("Current data: ", doc.data());
    });