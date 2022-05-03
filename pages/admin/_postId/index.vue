<template>
  <PostForm
    :is-update="true"
    :post="fetchedPost"
    @submit="updatePost($event)"
  />
</template>

<script>
import PostForm from "~/components/admin/PostForm";
export default {
  name: "new-post",
  layout : "admin",
  components : {
    PostForm
  },
  asyncData(context){
    return context.app.$axios.get(process.env.baseUrl + "posts/"+ context.params.postId+".json")
      .then(response => {
         return {
           fetchedPost : response.data
         }
      })
  },
  methods : {
    updatePost(updatedPost){
      this.$store.dispatch("updatedPost", { ...updatedPost, id : this.$route.params.postId })
      .then(response => {
        this.$router.push("/admin")
      })
    }
  }
}
</script>

<style scoped>

</style>
