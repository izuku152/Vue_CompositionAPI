import { ref } from "vue";
const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);
  const load = async () => {
    let data = await fetch("http://localhost:3000/projects");

    try {
      // It will simulate delay for 2s
      await new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });
      // data.ok means if data comes succesfully
      if (!data.ok) {
        // error object will throw this error
        throw Error("No Data Available");
      }
      // await data.json = wait until data is converted to json then assign it to posts
      posts.value = await data.json();
    } catch (err) {
      // Error will be stored in err and we output its messgae
      error.value = err.message;
    }
  };

  return { posts, error, load };
};

export default getPosts;
