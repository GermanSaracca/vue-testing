<template>
  <div class='home'>
    <!-- <referencing></referencing> -->
    <!-- <Title title="A title" />
    <PunchBag /> 
    <DynamicCSS />
    <Loops />
    <Props :numbers="numbers"/>
    <Conditionals />  -->
    <!-- <div :style="{border: 'solid 1px red'}">
      <h2>Parent info</h2>
      <p>Primitive: {{primitive}}</p>
      <p>Reference: {{JSON.stringify(reference)}}</p>
    </div>
    <PrimitiveVsReferenceTypes 
      :primitive="primitive"
      :reference="reference"
      @changePrimitive="updatePrimitive"
    /> -->
    <!-- <EventBus1 />
    <EventBus2 /> -->
    <LifeCycleHooks />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import DynamicCSS from '@/components/DynamicCSS.vue'
import Conditionals from '@/components/Conditionals.vue'
import Loops from '@/components/Loops.vue'
import PunchBag from '@/components/PunchBag.vue'
import Title from '@/components/Title.vue'
import Referencing from '@/components/Referencing.vue'
import Props from '@/components/Props.vue'
import PrimitiveVsReferenceTypes from '@/components/PrimitiveVsReferenceTypes.vue'
import EventBus1 from '@/components/EventBus1.vue'
import EventBus2 from '@/components/EventBus2.vue'
import LifeCycleHooks from '@/components/LifeCycleHooks.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    DynamicCSS,
    Conditionals,
    Loops,
    PunchBag,
    Title,
    Referencing,
    Props,
    PrimitiveVsReferenceTypes,
    EventBus1,
    EventBus2,
    LifeCycleHooks,
  },
  data: () => ({
    numbers: ['1', '2', '3'],
    primitive: "I'm a primitive",
    reference: {
      name: 'John',
      age: 30,
    },
  }),
  methods: {
    //We listen to this event from PrimitiveVsReferenceTypes.vue
    updatePrimitive(newPrimitive) {
      this.primitive = newPrimitive;
    },
  }
}
</script>
