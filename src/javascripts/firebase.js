import * as firebase from 'firebase'
let database
export const init = () => {
  let config = {
    apiKey: "AIzaSyD0bfsAuyJ1IjyyxkRBEd8IjG5nN9tGB3k",
    authDomain: "realtime-todo-app.firebaseapp.com",
    databaseURL: "https://realtime-todo-app.firebaseio.com",
    storageBucket: "realtime-todo-app.appspot.com",
    messagingSenderId: "351131102825"
  }
  firebase.initializeApp(config)
  database = firebase.database()
}
