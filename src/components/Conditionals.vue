<template>
    <div>
        <h1>Conditionals</h1>
        <button @click="toggleError">Toggle Error</button>
        <button @click="toggleSuccess">Toggle Sucess</button>
        <!-- <p v-if="error">Ther is an error</p>
        <p v-else-if="success">Sucess!!!</p> -->
        <p v-show="error">There has been an error</p>
        <p v-show="success">Success!!!</p>
    </div>
</template>

<script>
    export default {
        name: 'pepito',
        data: () => ({
            error: false,
            success: false,
        }),
        methods: {
            toggleError () {
                this.error = !this.error;
            },
            toggleSuccess () {
                this.success = !this.success;
            }
        }
    }
</script>