<template>
  <v-container>
    <h1>Blog</h1>
    <hr>
    <v-progress-circular
        v-if="loading"
      indeterminate
      color="primary"
    ></v-progress-circular>
    <v-container v-else>
        <h2>{{blog.title}}</h2>
        <p>{{blog.body}}</p>
    </v-container>
  </v-container>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id,
            blog: {},
            loading: false,
        }
    },
    created() {
        this.fetchBlog() 
    },
    methods: {
        fetchBlog() {

            this.loading = true;

            fetch(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
            .then(response => response.json())
            .then(json => {
                console.log(json)
                this.blog = json;
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                this.loading = false;
            })
        }
    }
    
}
</script>

<style>

</style>