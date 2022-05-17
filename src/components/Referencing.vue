<template>
  <div>
      <h1>Refs</h1>
      <p ref="par">LOL</p>
      <input type="text" ref="input" placeholder="Your favourite food">
      <button @click="submit">Submit</button>
      <p>Your favourite food: {{favFood}}</p>
  </div>
</template>

<script>
export default {
    data() {
        return {
            favFood: '',
        }
    },
    methods: {
        submit() {
            console.log(this.$refs.input)
            this.favFood = this.$refs.input.value;
        }
    }
}
</script>
