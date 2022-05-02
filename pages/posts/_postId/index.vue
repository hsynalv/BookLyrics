<template>
  <PostDetail :post="fetchedPost"/>
</template>

<script>
import PostDetail from "~/components/post/postDetail";
export default {
  components : {
    PostDetail
  },
  name: "index",
  asyncData(context, callback){
    setTimeout(()=>{
      callback(null, {
        fetchedPost : {
          id : 1,
          title : "Nuxt.js ile blog yazma",
          subTitle: "ID Bilgisi : " + context.params.postId,
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid ducimus earum labore magnam nam neque nostrum quae quaerat qui, quisquam rem reprehenderit vero! Consequatur, ducimus, labore. Ad est, nihil?",
          author: "Hasan Hüseyin Alav"
        }
      })
    },1500)
  }
}
</script>

<style scoped>

</style>
