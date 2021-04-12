<template>
  <div class="home">
    <h1>Composition API Basics</h1>
    <br />
    <h3>Ninja 1</h3>
    <p>My name is {{ ninja_1.name }} and my age is {{ ninja_1.age }}</p>
    <button @click="handleClick_1">Update Ninja 1</button>
    <br />
    <h3>Ninja 2</h3>
    <p>My name is {{ ninja_2.name }} and my age is {{ ninja_2.age }}</p>
    <button @click="handleClick_2">Update Ninja 2</button>
    <br />
    <p>{{ name2 }}</p>
    <button @click="changeName2">Change Name 2</button>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
export default {
  name: "Home",
  setup() {
    // Refs problem is we have to add .value
    // Reactive solves this problem but
    let ninja_1 = ref({ name: "Izuku", age: 20 });
    let ninja_2 = reactive({ name: "Bakugo", age: 12 });

    const handleClick_1 = () => {
      ninja_1.value.name = "Izuku Midoriya";
      ninja_1.value.age = 21;
    };
    const handleClick_2 = () => {
      ninja_2.name = "Katsuki Bakugo";
      ninja_2.age = 13;
    };
    //
    // Reactive doesn't work with primitive values
    let name2 = reactive("Mario"); //This is not a reactive value
    const changeName2 = () => {
      name2 = "Luigi"; //It will not work
    };

    // We must always return whatever we want to use inside of template
    return {
      ninja_1,
      ninja_2,
      handleClick_1,
      handleClick_2,
      name2,
      changeName2,
    };

    // Takeaways:

    // Refs are much better than reactive
    // Refs retain their reactivity when exposed to external functions
    // Use reactive for objects
  },
};
</script>
