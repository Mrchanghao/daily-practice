<template>
  <div id="app" class="container">
    <div class="page-header">
      <h2>using Firebase app</h2>
    </div>
    
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3>Add book</h3>
      </div>
      <div class="panel-body">
        <form id="form" class="form-group" @submit.prevent="addBook">
          <div class="form-group">
            <label for="title">제목</label>
            <input type="text" id="title" class="form-control" v-model="newBook.title">
          </div>
          <div class="form-group">
            <label for="author">지은이</label>
            <input type="text" id="author" class="form-control" v-model="newBook.author">
          </div>
          <div class="form-group">
            <label for="url">URL: </label>
            <input type="text" id="url" class="form-control" v-model="newBook.url">
          </div>
          <button for="submit" class="btn btn-primary">submit</button>
        </form>
      </div>
    </div>

      <div class=" panel panel-defatul">
        <div class="panel-heading">
          <h3>Book list</h3>
      </div>  
        <div class="panel-body">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>제목</th>
            <th>작가</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="book in books">
            <td><a :href="book.url">{{book.title}}</a></td>
            <td>{{book.author}}</td>
            <td><span class="glyphicon glyphicon-trash" @click="removeBook(book)"></span></td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
    
  </div>
</template>

<script>
import Firebase from 'firebase';

let config = {
    apiKey: "AIzaSyAnDNU3opxZWqBab--L8UWGMcPdUMFCWiw",
    authDomain: "vue-firebase-project-101.firebaseapp.com",
    databaseURL: "https://vue-firebase-project-101.firebaseio.com",
    storageBucket: "vue-firebase-project-101.appspot.com",
    projectId: "vue-firebase-project-101",
    messagingSenderId: "40130137315"
  };
  
let app = Firebase.initializeApp(config)
let db = app.database()
let booksRef = db.ref('books')


export default {
  name: 'App',
  firebase: {
    books: booksRef
  },
  components: {
    
  },
  data() {
    return {
      newBook: {
          title: '',
          author: '',
          url: ''
      }
    }
  },
  methods: {
    addBook() {
      booksRef.push(this.newBook);
      this.newBook.title = '';
      this.newBook.author = '';
      this.newBook.url = '';
    },
    removeBook(book) {
      // booksRef.slice()
    booksRef.child(book['.key']).remove();
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
  margin-top: 20px;
}

span .glyphicon {
  
}
</style>
