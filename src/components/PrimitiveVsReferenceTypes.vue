

<template>
  <!-- Primitive are booleans, strings, numbers, null, undefined, symbols, etc
Reference are objects, arrays, functions, etc -->
<!-- Every reference passed by a parent to a component and edited in that component will edit the parent's reference. -->
<div>
    <h1>Primitive vs References</h1>
    <p>Primitive: {{primitive}}</p>
    <p>Reference: {{JSON.stringify(reference)}}</p>
    <button @click="changeName">Change name</button>
    <button @click="changeAge">Change age</button>
    <button @click="changePrimitive">Change primitive text</button>
</div>
</template>

<script>
export default {
    props: ['primitive', 'reference'],
    methods: {
        changeName() {
            this.reference.name = 'Jane';
        },
        changeAge() {
            this.reference.age = 40;
        },
        changePrimitive() {
            this.$emit('changePrimitive', 'I changed the primitive');
        },
    },
}
</script>

<style>

</style>