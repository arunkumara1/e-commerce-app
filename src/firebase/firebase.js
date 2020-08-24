import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCv1G-X9FjcBBdNKEn0O3it8pCm1dOprd0",
    authDomain: "e-commerce-app-9b786.firebaseapp.com",
    databaseURL: "https://e-commerce-app-9b786.firebaseio.com",
    projectId: "e-commerce-app-9b786",
    storageBucket: "e-commerce-app-9b786.appspot.com",
    messagingSenderId: "118786139486",
    appId: "1:118786139486:web:1670ab82bab99119d91bcf",
    measurementId: "G-KN5ER27PNP"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };