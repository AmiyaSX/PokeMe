import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, get, set, onValue } from "firebase/database";
import firebaseConfig from "./firebaseConfig.js";
import { configure } from "mobx";
configure({ enforceActions: "never" }); // we don't use Mobx actions
// Initialise firebase app, database, ref
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const auth = getAuth(app);

const PATH = "PokeMe";
const rf = ref(db, PATH);
// set(ref(db, PATH+"/test"), "dummy"); /* this is for db initialize testing */

function modelToPersistence(model) {}

function persistenceToModel(data, model) {}

function saveToFirebase(model) {}

function readFromFirebase(model) {}

function connectToFirebase(model, watchFunction) {
  function checkACB() {
    console.log("checking");
    return [];
  }
  function effectACB() {
    saveToFirebase(model);
  }
  watchFunction(checkACB, effectACB);
}

export {
  auth,
  modelToPersistence,
  persistenceToModel,
  saveToFirebase,
  readFromFirebase,
};

export default connectToFirebase;
