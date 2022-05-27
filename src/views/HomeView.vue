<template>
    <v-container>
        <Mixings />
        <hr />
        <Filters />
    </v-container>
</template>

<script>
import Mixings from "@/components/Mixings.vue";
import Filters from "@/components/Filters.vue";

export default {
    name: "Home",

    components: {
        Mixings,
        Filters,
    },
};
</script>
