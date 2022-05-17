<template>
    <div>
        <h1>Dynamic CSS</h1>
        <h2>Example 1</h2>
        <!-- <div :class="{available: available}" @click="available = !available">
            <span>Ryu</span>
        </div> -->
        <h2>Example 2</h2>
        <button @click="nearby = !nearby">Toggle nearby</button>
        <button @click="available = !available">Toggle available</button>
        <div :class="compClasses">
            <span>Ryu</span>
        </div>

    </div>
</template>

<script>
export default {
  data: () => ({
    available: false,
    nearby: false
  }),
  computed: {
    compClasses () {
      return {
        available: this.available,
        nearby: this.nearby
      }
    }
  }
}
</script>
<style lang="scss" scoped>
    span {
        padding: 1rem;
        background: red;
    }
    .available {
        span {
            background: green;
        }
    }
    .nearby {
        span {
            border: solid 2px blue;
        }
    }
</style>
