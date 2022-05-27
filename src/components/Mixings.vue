<template>
    <div>
        <h1>Mixings</h1>
        <input type="text" v-model="search" placeholder="Search blogs" />
        <div v-for="blog in filteredBlogs" :key="blog.title">
            <h2>{{ blog.title }}</h2>
            <p>{{ blog.content }}</p>
        </div>
    </div>
</template>

<script>
import searchMixin from "../mixins/searchMixin.js";
export default {
    data() {
        return {
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
};
</script>
