// import { initializeApp } from "firebase/app";
// Add relevant imports here 
// import firebaseConfig from "/src/firebaseConfig.js";
import {configure} from "mobx";
configure({ enforceActions: "never", });  // we don't use Mobx actions
// Initialise firebase app, database, ref
// const app= initializeApp(firebaseConfig)
// const db= getDatabase(app)

const PATH=""
// const rf=ref(db, PATH)
// set(ref(db, PATH+"/test"), "dummy"); /* this is for db initialize testing */

function modelToPersistence(model){
    
}

function persistenceToModel(data, model){
    
}

function saveToFirebase(model){
    
}

function readFromFirebase(model){
    
}

function connectToFirebase(model, watchFunction){
    
}


export {modelToPersistence, persistenceToModel, saveToFirebase, readFromFirebase}

export default connectToFirebase;