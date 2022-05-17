<template>
  <div>
      <h1>Props</h1>
      <p v-for="num in numbers" :key="num">
          {{num}}
      </p>
  </div>
</template>

<script>
export default {
    props: {
        numbers: {
            type: Array,
            default: () => ['6', '99', '3']
        }
    },
    // props: ['numbers'], //Another way without prop types or default
    mounted() {
        console.log(this.numbers);
    },
}
</script>
