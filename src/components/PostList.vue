<template>
  <div v-for="post in posts" :key="post">
    <Post :post="post" v-if="showPost" />
  </div>
  <br />
  <button @click="showPost = !showPost">Toggle Post Component</button>
</template>

<script>
import { ref, onBeforeMount, onMounted, onUnmounted } from "vue";
import Post from "./Post";
export default {
  components: { Post },
  props: ["posts"],
  setup(props) {
    // To use Props inside setup
    // We have to write it as a parameter
    //
    const handleClick = () => {
      let post1 = props.posts[0];
      props.posts[0] = props.posts[1];
      props.posts[1] = post1;
    };
    onMounted(() => {
      console.log("Component Mounted");
    });
    onUnmounted(() => {
      console.log("PostList Component Unmounted");
    });
    onBeforeMount(() => {
      console.log("Before Mounted");
    });
    const showPost = ref(true);
    return { handleClick, showPost };
  },
};
</script>

<style></style>
