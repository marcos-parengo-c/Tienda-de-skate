import firebase from 'firebase/app'
import '@firebase/firestore'

const app = firebase.initializeApp({
    apiKey: "AIzaSyADL2JG0jHdYwstj_HhT0SvJAzfSlL2OSg",
    authDomain: "tienda-de-skate-92e46.firebaseapp.com",
    projectId: "tienda-de-skate-92e46",
    storageBucket: "tienda-de-skate-92e46.appspot.com",
    messagingSenderId: "426498971554",
    appId: "1:426498971554:web:9d9777d37de7405827c4fb",
    measurementId: "G-42TQQB87TK"
});

export const getFirebase = () => {
    return app;
}

export const getFirestore = () => {
    return firebase.firestore(app);
}