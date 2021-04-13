<template>
  <div class="home">
    <h1>Composition API Basics</h1>
    <br />
    <input type="text" v-model="search" />
    <br />
    <p v-for="name in names" :key="name">{{ name }}</p>
    <br />
    <button @click="handleClick">Stop Watching</button>
  </div>
</template>

<script>
import { computed, ref, watch, watchEffect } from "vue";
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
    // Watch only runs when something happens to search
    const stopWatch = watch(search, () => {
      console.log("Watch funtion Ran");
    });
    // Watch Effect runs whenever component loads for the first time or in this case when th setup first loaded
    // It will start whenever the value of search changes
    // WatchEffect is mostly used to get data from database
    // lets say whenever ID changes it feteches data from database
    const stopEffect = watchEffect(() => {
      console.log("Watch Effect Ran", search.value);
    });

    const handleClick = () => {
      stopWatch();
      stopEffect();
    };

    // What if you want them to stop watching after some condition is true
    // Just assign thees functions to a variable and call it
    return { search, names, handleClick };
  },
};
</script>