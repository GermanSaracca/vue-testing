<template>
  <div>
      <h1>Life-cycles hooks</h1>
      <button @click="count++">Click on me to update the count</button>
      <p>{{count}}</p>
  </div>
</template>

<script>
export default {
  data: () => ({
    count: 0
  }),
  methods: {
    increment() {
      this.count++
    }
  },
  // Life-cycle hooks are methods that are called by Vue.js when certain events occur.
  beforeCreate() {
    console.log('%c beforeCreate ', "background-color: yellow; color: black;");
  },
  created() {
    /* 
      The created() method will be called on your component after the component object is created but before it is put on the page. All of the component's data, props, computed and methods will be available. The only thing that won't be available is the template or any of the component's DOM. There really is no view yet to speak of.
    */
    console.log('%c Created ', "background-color: green");
  },
  beforeMount() {
    console.log('%c beforeMount ', "background-color: blue");
  },
  mounted() {
    /* 
      The mounted() method will be called on your component after the component is put on the page. The DOM is available and can be accessed.
    */
    console.log('%c Mounted ', "background-color: cyan; color: black;");
  },
  beforeUpdate() {
    // The beforeUpdate() method will be called on your component before the component is updated for any reason
    console.log('%c beforeUpdate ', "background-color: orange");
  },
  updated() {
    // The updated() method will be called on your component after the component is updated for any reason
    console.log('%c Updated ', "background-color: red");
  },
}
</script>

<style>

</style>