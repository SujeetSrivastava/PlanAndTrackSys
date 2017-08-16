import * as firebase from 'firebase';

var config = {
    apiKey: "XXXXXXXXXX",
    authDomain: "goalcoach-e57db.firebaseapp.com",
    databaseURL: "https://goalcoach-e57db.firebaseio.com",
    projectId: "goalcoach-e57db",
    storageBucket: "goalcoach-e57db.appspot.com",
    messagingSenderId: "341140979604"
  };

  export const firebaseApp = firebase.initializeApp(config); 
  export const goalRef = firebase.database().ref('goals');
  export const inprogressGoalsRef = firebase.database().ref('inprogressGoals');
  export const completeGoalRef = firebase.database().ref('completeGoals');
