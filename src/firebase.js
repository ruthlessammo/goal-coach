import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDmPvIdbUprPIE23fHrTXqeSssT2Pb6tA0",
    authDomain: "goal-coach-ffcbd.firebaseapp.com",
    databaseURL: "https://goal-coach-ffcbd.firebaseio.com",
    projectId: "goal-coach-ffcbd",
    storageBucket: "",
    messagingSenderId: "311828817347"
  };

  export const firebaseApp = firebase.initializeApp(config);
