<template>
  <div class="home">
    <h1>Composition API Basics</h1>
    <br />
    <h3>Setup</h3>
    <p>My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">Click Me</button>
    <h3>Options</h3>
    <p>My name is {{ namee }} and my age is {{ agee }}</p>
    <button @click="handleClicke">Click Me</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  // Composition API runs before options API
  setup() {
    let name = "Hassan";
    let age = 50;

    const handleClick = () => {
      console.log("You Clicked Me");
    };

    // We must always return whatever we want to use inside of template
    return { name, age, handleClick };
  },

  // We can use both Options and Composition API
  // they cannot communicate b/w each other
  data() {
    return {
      namee: "M. Hassan Hanif Khan",
      agee: 20,
    };
  },
  methods: {
    handleClicke() {
      console.log("Options handle click");
    },
  },
};
</script>
