<template>
  <PostForm @submit="savePost($event)"/>
</template>

<script>
import PostForm from "~/components/admin/PostForm";
import axios from "axios"
export default {
  name: "new-post",
  layout : "admin",
  components : {
    PostForm
  },
  methods : {
    savePost(post){
      this.$store.dispatch("addPost",post)
      .then(response => {
        this.$router.push("/admin")
      })
    }
  }
}
</script>

<style scoped>

</style>
