<template>
  <div v-if="error">
    {{ error }}
  </div>
  <div v-if="post">
    <h1>{{ post.id }}</h1>
    <br />
    <p>{{ post.body }}</p>
    <br />
    <span v-for="tag in post.tags" :key="tag">#{{ tag }}</span>
  </div>
</template>

<script>
import getPost from "../composables/getPost";
export default {
  props: ["id"],
  setup(props) {
    const { post, error, load } = getPost(props.id);
    load();

    return { post, error, load };
  },
};
</script>

<style></style>
