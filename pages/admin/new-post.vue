<template>
  <PostForm @submit="savePost($event)"/>
</template>

<script>
import PostForm from "~/components/admin/PostForm";
export default {
  name: "new-post",
  layout : "admin",
  components : {
    PostForm
  },
  methods : {
    savePost(post){
      console.log(post)
    }
  }
}
</script>

<style scoped>

</style>
