import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {

    apiKey: "AIzaSyAXbbVRwSEBKfsYGxoS3Yu4DuJcaQft2iI",
    authDomain: "photogram-6c92d.firebaseapp.com",
    projectId: "photogram-6c92d",
    storageBucket: "photogram-6c92d.appspot.com",
    messagingSenderId: "677141182272",
    appId: "1:677141182272:web:dad46f83648899d670aca5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };