<template>
    <div>
        <h1 v-highlight>{{ title | to-uppercase }}</h1>
        <p>{{ content | snippet }}</p>
        <input type="text" v-model="search" placeholder="Search blogs" />
        <div v-for="blog in filteredBlogs" :key="blog.title">
            <h2>{{ blog.title | to-uppercase }}</h2>
            <p>{{ blog.content | snippet }}</p>
        </div>
    </div>
</template>

<script>
import searchMixin from "../mixins/searchMixin.js";
export default {
    data() {
        return {
            title: "Some title",
            content:
                "Lorem ipsum dolr sit amet Lorem ipsum dolr sit amet Lorem ipsum dolr sit amet Lorem ipsum dolr sit amet Lorem ipsum dolr sit amet Lorem ipsum dolr sit amet Lorem ipsum dolr sit amet",
            blogs: [
                {
                    title: "Blog 1",
                    content: "I am the blog number 1 food",
                },
                {
                    title: "Blog 2",
                    content: "I am the blog number 2 drink",
                },
                {
                    title: "Blog 3",
                    content: "I am the blog number 3 sleep",
                },
                {
                    title: "Blog 4",
                    content: "I am the blog number 4 eat",
                },
            ],
            search: "",
        };
    },
    mixins: [searchMixin],
    computed: {},
    filters: {
        // 'to-uppercase': function(value) {
        //     return value.toUpperCase()
        // },
        toUppercase(value) {
            return value.toUpperCase();
        },
        // 'snippet': function(value) {
        //     return value.slice(0, 100) + '...'
        // }
        snippet(value) {
            return value.slice(0, 100) + "...";
        },
    },
    directives: {
        highlight: {
            bind(el, binding, vnode) {
                el.style.backgroundColor = "yellowgreen";
            },
        },
    },
};
</script>

<style></style>
