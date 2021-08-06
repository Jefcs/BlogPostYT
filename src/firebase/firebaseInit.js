import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyB5Xk0DzOSROCYPz5fd3JWyCPBBOOksO8c",
  authDomain: "fireblogsyt-9cb60.firebaseapp.com",
  projectId: "fireblogsyt-9cb60",
  storageBucket: "fireblogsyt-9cb60.appspot.com",
  messagingSenderId: "507222158898",
  appId: "1:507222158898:web:4c8a28f64cc8784000162b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
