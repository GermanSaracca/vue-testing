<template>
    <div>
        <h1>Computed Properties</h1>
        <button @click="a++">Add to A</button>
        <button @click="b++">Add to B</button>
        <p>A- {{a}}</p>
        <p>B- {{b}}</p>
        <p>Age + A ={{ addToA }}</p>
        <p>Age + B ={{ addToB }}</p>
    </div>
</template>
<script>
export default {
  data: () => ({
    age: 20,
    a: 0,
    b: 0
  }),
  methods: {},
  computed: {
    // They only run when the value changes
    addToA () {
      console.log('addToA')
      return this.a + this.age
    },
    addToB () {
      console.log('addToB')
      return this.b + this.age
    }
  }
}
</script>
