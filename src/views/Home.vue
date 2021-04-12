<template>
  <div class="home">
    <h1>Composition API Basics</h1>
    <br />
    <h3 ref="p">Setup</h3>
    <p>My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">Click Me</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Home",
  // Composition API runs before options API
  setup() {
    let name = "Hassan";
    let age = 20;

    // to use template ref like in Options API
    // We need to import it
    // We hardly use template refs
    // We can use it in another way

    let p = ref(null);
    console.log(p); // Ref will be Null
    console.log(p.value); // Ref Value will be Null

    const handleClick = () => {
      console.log(p); // Ref will point h3 in template
      console.log(p.value); //Ref Value will be h3
      p.value.textContent = "Changed Text Content";
    };

    // We must always return whatever we want to use inside of template
    return { name, age, handleClick, p };
  },
};
</script>
