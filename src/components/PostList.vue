<template>
  <div v-for="post in posts" :key="post.id">
    <Post :post="post" />
  </div>
</template>

<script>
import Post from "./Post";
export default {
  components: { Post },
  props: ["posts"],
};
</script>

<style></style>
