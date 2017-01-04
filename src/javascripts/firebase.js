import * as firebase from 'firebase'
let database

import sectionModel from './models/section'
import todoModel from './models/todo'

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


// retrieve from firebase
// return promise object
export const getSectionsDB = () => {
  return database.ref('/').once('value')
}

// get specified section
export const getTodoDB = (sectionId) => {
  return database.ref(`/${sectionId}`).once('value')
}

// add new section
export const addSection = (name) => {
  let key = database.ref('/').push().key
  let model = sectionModel(key, name, firebase.database.ServerValue.TIMESTAMP)
  return database.ref('/'+ key).set(model)
}

// add new todo item into specified section
export const addTodoItem = (id, name) => {
  return new Promise((resolve, reject) => {
    database.ref(`/${id}`).once('value').then((todo) => {
      let todos = todo.val().todos || []
      let key = database.ref(`/${id}`).push().key
      todos.push(todoModel(key, name, firebase.database.ServerValue.TIMESTAMP))
      database.ref(`/${id}/todos`).set(todos)
        .then( res => {resolve(res)})
        .catch( error => {reject(error)})
    })
  })
}
