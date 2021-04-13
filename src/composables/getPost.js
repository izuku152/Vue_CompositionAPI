import { ref } from "vue";
const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);
  const load = async () => {
    let data = await fetch("http://localhost:3000/projects/" + id);

    try {
      // data.ok means if data comes succesfully
      if (!data.ok) {
        // error object will throw this error
        throw Error("No Data Available");
      }
      // await data.json = wait until data is converted to json then assign it to posts
      post.value = await data.json();
    } catch (err) {
      // Error will be stored in err and we output its messgae
      error.value = err.message;
    }
  };

  return { post, error, load };
};

export default getPost;
