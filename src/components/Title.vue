<template>
    <h1>{{title}}</h1>
</template>

<script>

export default {
    data: () => ({
        
    }),
    props: {
        title: {
            type: String,
            default: 'Title default',
        },
    },
    methods: {
      log: function() {
        console.log( typeof this.title);
      },  
    },
    mounted: function() {
        this.log();
    },
}
</script>

<style>

</style>