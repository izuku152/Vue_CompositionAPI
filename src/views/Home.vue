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
import { ref } from "vue";
export default {
  name: "Home",
  components: { PostList },
  setup() {
    const posts = ref([]);
    const error = ref(null);

    const load = async () => {
      let data = await fetch("http://localhost:3000/projects");

      try {
        // data.ok means if data comes succesfully
        if (!data.ok) {
          // error object will throw this error
          throw Error("No Data Available");
        }
        // await data.json = wait until data is converted to json then assign it to posts
        posts.value = await data.json();
      } catch (err) {
        // Error will be stored in err and we output its messgae
        error.value = err.message;
      }
    };
    load();

    return { posts, error };
  },
};
</script>
