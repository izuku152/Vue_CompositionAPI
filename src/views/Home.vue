<template>
  <div class="home">
    <div v-if="error">
      No Data Available
    </div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>
      Loading...
    </div>
  </div>
</template>

<script>
import PostList from "../components/PostList";
import getPosts from "../composables/getPosts";
export default {
  name: "Home",
  components: { PostList },
  setup() {
    // To use a composable we have to destructurize it first
    // Initally posts and error will have null value
    const { posts, error, load } = getPosts();
    // After Load Function 
    load();

    return { posts, error, load };
  },
};
</script>
