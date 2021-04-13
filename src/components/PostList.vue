<template>
  <div v-for="post in posts" :key="post">
    <Post :post="post" />
  </div>
  <br />
  <button @click="handleClick">Switch Posts</button>
</template>

<script>
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

    return { handleClick };
  },
};
</script>

<style></style>
