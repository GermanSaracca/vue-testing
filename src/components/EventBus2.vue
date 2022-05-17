<template>
  <div>
      <h1>Event Bus Two</h1>
        <h2>Title is: {{title}}</h2>
  </div>
</template>

<script>
import { bus } from '@/main';
export default {
    data() {
        return {
            title: 'Initial Bus Two title',
        }
    },
    created() {
        //We listen to this event from EventBus1.vue at the moment the component is created
        bus.$on('changeTitle', (newTitle) => {
            this.title = newTitle;
        });
    }
}
</script>
