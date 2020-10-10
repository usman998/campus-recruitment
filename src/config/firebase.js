import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCozGKQgxju2K118G5Gx0-wqOHIO8MF-wI",
    authDomain: "campusrecuirnment.firebaseapp.com",
    databaseURL: "https://campusrecuirnment.firebaseio.com",
    projectId: "campusrecuirnment",
    storageBucket: "campusrecuirnment.appspot.com",
    messagingSenderId: "1061776537583",
    appId: "1:1061776537583:web:5bdb5c60a04561547a281a",
    measurementId: "G-MGM07WJPG1"
};;

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.database();

const auth = firebase.auth();

const storage = firebase.storage()

// console.log('chalala',firebase)

export { db, auth, storage };



//   <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/7.22.0/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/7.22.0/firebase-analytics.js"></script>

