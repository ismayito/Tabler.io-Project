 import firebase from "firebase/app"
 import { initializeApp,getApp } from "firebase/app";
 import { getFirestore } from 'firebase/firestore';
 import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";
 import { env } from 'process';


 function getInitializedApp(){
  try{
    return getApp();
  }
  catch(any){
    const firebaseConfig = {
      apiKey:process.env.apiKey, 
      authDomain: "tabler-project.firebaseapp.com",
      projectId: "tabler-project",
      storageBucket: "tabler-project.appspot.com",
      messagingSenderId: "215462454255",
      appId: "1:215462454255:web:cc24bd4db55a0270ac0c1a",
      measurementId: "G-NGDM3F158E"
    }
    return initializeApp(firebaseConfig);
  }
 }
 const App=getInitializedApp();
 const db = getFirestore(App)
 const auth=getAuth(App)


  export {db,auth};
