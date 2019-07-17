import app from 'firebase/app';
import 'firebase/auth';

require('dotenv').config();

const firebaseDevConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_MY_APP_ID
};

const firebaseProdConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_MY_APP_ID
}
const firebaseConfig = process.env.NODE_ENV === "development" ? firebaseDevConfig : firebaseProdConfig
class Firebase{
  constructor(){
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
  }

  // function for a new user (sign up)
  signUpUserWithEmailAndPassword = (email ,password) => this.auth.createUserWithEmailAndPassword(email, password);

  // function for sign-in (login)
  signInUserWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password);

  // function for logout
  signOut = () => this.auth.signOut();

  // function to reset password
  resetPassword = (email) => this.auth.sendPasswordResetEmail(email);

}

export default Firebase;
