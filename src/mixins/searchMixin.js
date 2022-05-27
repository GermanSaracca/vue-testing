export default {
    computed: {
        filteredBlogs: function () {
            return this.blogs.filter((blog) => {
                return blog.title
                    .toLowerCase()
                    .includes(this.search.toLowerCase());
            });
        },
    },
};
