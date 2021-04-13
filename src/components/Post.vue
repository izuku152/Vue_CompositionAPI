<template>
  <h6>Title:</h6>
  <h3>{{ post.title }}</h3>
  <h6>Details:</h6>
  <p>{{ snippet }}</p>
  <hr />
</template>

<script>
import { computed } from "vue";
export default {
  props: ["post"],
  setup(props) {
    let snippet = computed(() => {
      return props.post.body.substring(0, 100) + "....";
    });

    return { snippet };
  },
};
</script>

<style></style>
