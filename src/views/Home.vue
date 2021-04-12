<template>
  <div class="home">
    <h1>Composition API Basics</h1>
    <br />
    <input type="text" v-model="search" />
    <br />
    <p v-for="name in filteredNames" :key="name">{{ name }}</p>
  </div>
</template>

<script>
import { computed, ref } from "vue";
export default {
  name: "Home",
  setup() {
    const search = ref("");
    const names = ref([
      "mario",
      "luigi",
      "shaun",
      "chun-li",
      "ninja",
      "izuku",
      "bakugo",
      "todoroki",
    ]);
    // We have to import computed first
    // Computed function accepts a function which should returns a value
    // How to filter an array based on search value
    const filteredNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });

    return { search, names, filteredNames };
  },
};
</script>
