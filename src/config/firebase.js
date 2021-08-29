import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCnCiagidfsHc6PN3tdKX0Il9pypbK5Ir8",
  authDomain: "campus-recruitment-e76bc.firebaseapp.com",
  projectId: "campus-recruitment-e76bc",
  storageBucket: "campus-recruitment-e76bc.appspot.com",
  messagingSenderId: "1084740416711",
  appId: "1:1084740416711:web:9e5a375aaf8dde2a65bae2",
  measurementId: "G-81NR6SZYW0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.database();

const auth = firebase.auth();

const storage = firebase.storage();

// console.log('chalala',firebase)

export { db, auth, storage };

//   <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/7.22.0/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/7.22.0/firebase-analytics.js"></script>
