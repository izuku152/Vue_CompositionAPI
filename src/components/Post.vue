<template>
  <h6>Title:</h6>
  <h3>{{ post.title }}</h3>
  <h6>Details:</h6>
  <p>{{ snippet }}</p>
  <hr />
</template>

<script>
import { computed, onUnmounted } from "vue";
export default {
  props: ["post"],
  setup(props) {
    // You can do the substring thing w/o computed
    // Its a good practice to use them inside computed
    let snippet = computed(() => {
      return props.post.body.substring(0, 100) + "....";
    });
    // When this component gets unmounted this function will run
    onUnmounted(() => {
      console.log("Post Component Unmounted");
    });

    return { snippet };
  },
};
</script>

<style></style>
