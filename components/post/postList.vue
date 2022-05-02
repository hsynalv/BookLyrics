<template>
  <div class="container-fluid mt-5 d-flex flex-wrap justify-content-center align-items-center">
    <Post
      v-for="post in posts"
      :is-admin="isAdmin"
      :key="post.id"
      :post="post"
    />
  </div>
</template>

<script>
import Post from "~/components/post/post";
export default {
  name: "postList",
  components : {
    Post
  },
  props : {
    isAdmin : {
      type : Boolean,
      required : false,
      default : false
    },
    posts : {
      required: true,
      type : Array
    }
  }
}
</script>

<style scoped>

</style>
