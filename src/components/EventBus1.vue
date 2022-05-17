<template>
  <div>
        <h1>Event Bus One</h1>
        <h2>Title is: {{title}}</h2>
        <button @click="changeTitle('Lorem')" >
          Change title to Lorem
        </button>
  </div>
</template>

<script>
import { bus } from '@/main'

export default {
    data() {
        return {
            title: 'Initial Bus 1 title',
        }
    },
    methods : {
        //We emit this event
        changeTitle(newTitle) {
            this.title = newTitle;
            bus.$emit('changeTitle', newTitle );
        },
    }
}
</script>
