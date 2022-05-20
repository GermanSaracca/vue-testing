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
    <!-- <LifeCycleHooks /> -->
    <!-- <Slots>
      <h2 slot="title">{{title}}</h2>
      <p slot="text">I am the paragraph text</p>
    </Slots> -->
    <!-- This will look and know we want to output a component in here -->
    <!-- If we wrap component tag in keep-alive the component change will not unmount the last view -->
    <!-- <keep-alive>
      <component :is="selectedDynamicView"></component>
    </keep-alive>

    <button @click="selectedDynamicView = 'DynamicCSS'">Show DynamicCSS</button>
    <button @click="selectedDynamicView = 'PunchBag'">Show PunchBag</button> -->
    <!-- <AddBlog /> -->
    <Filters />
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
import Slots from '@/components/Slots.vue'
import AddBlog from '@/components/AddBlog.vue'
import Filters from '@/components/Filters.vue'

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
    Slots,
    AddBlog,
    Filters,
  },
  data: () => ({
    numbers: ['1', '2', '3'],
    primitive: "I'm a primitive",
    reference: {
      name: 'John',
      age: 30,
    },
    title: "I'm a dynamic slot title",
    selectedDynamicView: 'DynamicCSS',
  }),
  methods: {
    //We listen to this event from PrimitiveVsReferenceTypes.vue
    updatePrimitive(newPrimitive) {
      this.primitive = newPrimitive;
    },
  }
}
</script>
