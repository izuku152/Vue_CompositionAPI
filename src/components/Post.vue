<template>
  <h6>Title:</h6>
  <!-- Router Link with component name and props -->
  <router-link :to="{ name: 'Details', params: { id: post.id } }">
    <h3>{{ post.title }}</h3>
  </router-link>
  <h6>Details:</h6>
  <p>{{ snippet }}</p>
  <br />
  <span v-for="tag in post.tags" :key="tag">#{{ tag }}</span>
  <hr />
</template>

<script>
import { computed } from "vue";
export default {
  props: ["post"],
  setup(props) {
    // You can do the substring thing w/o computed
    // Its a good practice to use them inside computed
    let snippet = computed(() => {
      return props.post.body.substring(0, 100) + "....";
    });
    // When this component gets unmounted this function will run
    return { snippet };
  },
};
</script>

<style></style>
