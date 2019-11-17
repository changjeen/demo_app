import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyB5zEglqlguSC1vcAJvgxvf8naXSgLuhQw",
    authDomain: "demoapi-38745.firebaseapp.com",
    databaseURL: "https://demoapi-38745.firebaseio.com",
    projectId: "demoapi-38745",
    storageBucket: "demoapi-38745.appspot.com",
    messagingSenderId: "886308659504",
    appId: "1:886308659504:web:50d8611a89e20dd9d568f5",
    measurementId: "G-FWXGGYZSQS"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
