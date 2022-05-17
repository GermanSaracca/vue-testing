<template>
    <div>
        <h1>{{title}}</h1>
        <div>
            <ul>
                <li v-for="character in characters" :key="character">
                    {{character}}
                </li>
            </ul>
            <hr>
            <ul>
                <li v-for="(ninja, i) in ninjas" :key="ninja.name" >
                    {{i}}. {{ninja.name}} - {{ninja.age}}
                </li>
            </ul>
            <hr>
            <!-- Como el fragmento en react  -->
            <template v-for="ninja in ninjas" >
                <h3 :key="ninja.name">{{ninja.name}}</h3>
                <p :key="ninja.age">{{ninja.age}}</p>
            </template>
            <!-- Cicle trough and array of object another way  -->
            <template v-for="ninja in ninjas">
                <div v-for="(val,key) in ninja" :key="val + key">
                    <p :key="key">{{key}}-{{val}}</p>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        title: 'Loops',
        characters: ["Mario", "Luigi", "Yoshi", "Bowser"],
        ninjas: [
            { name: "Ryu", age: 25, level: 5 },
            { name: "Ken", age: 35 },
            { name: "Chun-Li", age: 20 },
            { name: "M.Bison", age: 30 },
        ]
    }),
    methods: {
    },
    computed: {

    }
}
</script>