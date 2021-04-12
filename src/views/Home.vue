<template>
  <div class="home">
    <h1>Composition API Basics</h1>
    <br />
    <h3 ref="p">Setup</h3>
    <p>My name is {{ name }} and my age is {{ age }}</p>
    <br />
    <input type="text" v-model="name" />
    <br />
    <button @click="handleClick">Click Me</button>
    <button @click="age++">Add 1 to Age</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Home",
  setup() {
    // By default Composition API don't have reactive Values
    // To make them reactive, we use ref
    let name = ref("");
    let age = ref(20);

    const handleClick = () => {
      // To get value of ref inside setup we add .value
      // But in template we just write it w/o .value
      name.value = "Izuku Midoriya";
    };

    // We must always return whatever we want to use inside of template
    return { name, age, handleClick };
  },
};
</script>
