<template>
  <PostDetail :post="fetchedPost"/>
</template>

<script>
import PostDetail from "~/components/post/postDetail";
import axios from "axios";
export default {
  components : {
    PostDetail
  },
  name: "index",
  asyncData(context){
    return axios.get("https://skorsky-blog-default-rtdb.firebaseio.com/posts/"+ context.params.postId+".json")
    .then(response => {
      return {
        fetchedPost : response.data
      }
    })
  }
}
</script>

<style scoped>

</style>
