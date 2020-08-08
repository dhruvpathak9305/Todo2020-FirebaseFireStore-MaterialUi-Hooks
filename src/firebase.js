// const firebaseConfig = {
//     apiKey: "AIzaSyBR5oDUZYN2Qqn1v_9YFyR1-duGmoRWYTE",
//     authDomain: "todo-2020-3d60b.firebaseapp.com",
//     databaseURL: "https://todo-2020-3d60b.firebaseio.com",
//     projectId: "todo-2020-3d60b",
//     storageBucket: "todo-2020-3d60b.appspot.com",
//     messagingSenderId: "883697016143",
//     appId: "1:883697016143:web:db184c9de42b5bc2f5b93a",
//     measurementId: "G-PC1G2R46LZ"
// };
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBR5oDUZYN2Qqn1v_9YFyR1-duGmoRWYTE",
    authDomain: "todo-2020-3d60b.firebaseapp.com",
    databaseURL: "https://todo-2020-3d60b.firebaseio.com",
    projectId: "todo-2020-3d60b",
    storageBucket: "todo-2020-3d60b.appspot.com",
    messagingSenderId: "883697016143",
    appId: "1:883697016143:web:db184c9de42b5bc2f5b93a",
    measurementId: "G-PC1G2R46LZ"
})

const db = firebaseApp.firestore();
export { db };