<template>
  <div class="home">
    <PostList :posts="posts" />
  </div>
</template>

<script>
import PostList from "../components/PostList";
import { ref } from "vue";
export default {
  name: "Home",
  components: { PostList },
  setup() {
    const posts = ref([
      {
        title: "Top 10 UI Libraries",
        body:
          "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.",
      },
      {
        title: "Front-End Web Developer Roadmap",
        body:
          "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.",
      },
    ]);

    return { posts };
  },
};
</script>
