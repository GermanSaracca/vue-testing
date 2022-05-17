<template>
  <div class="about">
    <h1>{{title}}</h1>
    <router-link v-bind:to="link">Go home</router-link>
    <hr>
    <input type="text" :value="name">
    <p v-html="websiteTag"></p>
    <hr>
    <div class="form">
      <h1>Keyboard events</h1>
      <label>Name</label>
      <input type="text" v-model="name">
      <label>Age:</label>
      <input type="text" v-model="age">
      <span>{{name}}</span>
      <span>{{age}}</span>
    </div>
    <hr>
    <a @click.prevent="click" href="https://google.com">The net ninja</a>
    <div>
      <div id="canvas" @mousemove="updateXY">
        <p>{{x}}</p>
        <p>{{y}}</p>
      </div>
      <hr>
      <button @click.once="add(1)" >Add a year</button>
      <button @click="substract(1)">Substract a year</button>
      <button @click="add(2)" >Add 2 years</button>
      <button @click="substract(2)">Substract 2 years</button>
      <p>My age is {{ageCounter}}</p>
      <hr>
    </div>

  </div>
</template>

<script>
export default {
  data: () => ({
    title: 'About',
    link: '/',
    name: '',
    age: '',
    websiteTag: '<a href="http://thenetninja.co.uk">Ninja website</a>',
    ageCounter: 0,
    x: 0,
    y: 0
  }),
  methods: {
    logName () {
      console.log('Name entered')
    },
    logAge () {
      console.log('Age entered')
    },
    click () {
      alert('The net ninja')
    },
    add (inc) {
      this.ageCounter += inc
    },
    substract (dec) {
      this.ageCounter -= dec
    },
    updateXY (event) {
      this.x = event.offsetX
      this.y = event.offsetY
    }
  }
}
</script>
<style lang="scss">
  .form {
    display: flex;
    flex-direction: column;
  }
  #canvas {
    width: 300px;
    height: 300px;
    border: solid 2px black;

    p {
      font-weight: bolder;
    }
  }
</style>
