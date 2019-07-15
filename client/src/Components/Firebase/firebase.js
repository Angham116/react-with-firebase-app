import app from 'firebase/app';
import 'firebase/auth';

require('dotenv').config();

const firebaseConfig ={
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_MY_APP_ID
};

class Firebase{
  constructor(){
    app.initializeApp(firebaseConfig);
    this.authUser = app.auth();
  }
}

export default Firebase;
