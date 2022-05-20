<template>
  <div v-theme:light="'narrow'" class="blog-container">
    <h2>Add a new blog post</h2>

    <form >
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" id="title" v-model.lazy="blog.title">
      </div>
      <div class="form-group">
        <label for="content">Blog content</label>
        <textarea id="content" v-model.lazy="blog.content"></textarea>
      </div>
      <div class="form-group checks">
        <h3>Categories</h3>
        <div class="check-group">        
          <label for="ninjas">Ninjas</label>
          <input type="checkbox" value="ninjas" v-model="blog.categories">
        </div>
        <div class="check-group">        
          <label for="wizards">Wizards</label>
          <input type="checkbox" value="wizards" v-model="blog.categories">
        </div>
        <div class="check-group">        
          <label for="mario">Mario</label>
          <input type="checkbox" value="mario" v-model="blog.categories">
        </div>
        <div class="check-group">        
          <label for="cheese">Cheese</label>
          <input type="checkbox" value="cheese" v-model="blog.categories">
        </div>




      </div>
      <div class="form-group">
        <label for="author">Author</label>
        <select v-model="blog.author">
          <option v-for="author in authors" :key="author">{{author}}</option>
        </select>
      </div>
      <div class="preview">
        <h3 >Preview blog</h3>
        <p v-rainbow >Blog title: {{blog.title}} </p>
        <p v-rainbow >Blog content: </p>
        <p v-rainbow >{{blog.content}}</p>
        <p v-rainbow >Blog categories:</p>
        <ul>
          <li v-for="category in blog.categories" :key="category">{{category}}</li>
        </ul>
        <p>Blog author: {{blog.author}}</p>
      </div>
      <button type="submit" class="btn btn-primary" >Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {  
      blog: {
        title: '',
        content: '',
        categories: [],
        author: ''
      },
      authors: ["German", "Mariana", "Gino"]
    }
  },
  methods: {
    
  },
}
</script>
<style lang="scss">
  .blog-container {
    color: #333;
    // max-width: 500px;
    margin: 0 auto;

      h2 {
        font-size: 2rem;  
        margin-bottom: 1rem;
      }
      form {
        padding: 1rem;
        border: solid 2px #333;
       
        .form-group {
          display: flex;
          flex-direction: column;

          input, textarea {
            border: solid 2px rgba(51, 51, 51, 0.527);
            border-radius: 5px;
            padding: .5rem .25rem;
          }
          input[type="checkbox"] {
            accent-color: red;
          }
          &.checks {
            flex-direction: row;

            h3 {
              margin-right: 1rem;
            }
          }
          .check-group {
            display: flex;
            gap: .5rem;
            align-items: center;
            align-self: center;

            label {
              margin: 0;
            }
          }
       
          label {
              margin-bottom: 0.5rem;
          }
        }
      }

  }
</style>