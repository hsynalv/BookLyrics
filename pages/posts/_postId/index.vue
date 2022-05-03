<template>
  <PostDetail :post="fetchedPost"/>
</template>

<script>
import PostDetail from "~/components/post/postDetail";
export default {
  components : {
    PostDetail
  },
  head : {
    title : "Skorsky Blog | Post"
  },
  name: "index",
  asyncData(context){
    return context.app.$axios.get(process.env.baseUrl + "posts/"+ context.params.postId+".json")
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
