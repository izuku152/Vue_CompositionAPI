<template>
  <div class="post">
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
  </div>
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

<style>
.post {
  margin: 0 40px 30px;
  padding-bottom: 30px;
  border-bottom: 1px dashed #e7e7e7;
}
.post h3 {
  display: inline-block;
  position: relative;
  font-size: 26px;
  color: white;
  margin-bottom: 10px;
  max-width: 600px;
}
.post h3::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: #ff8800;
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
  transform: rotateZ(-1deg);
}
</style>
