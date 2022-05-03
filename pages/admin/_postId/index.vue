<template>
  <PostForm
    :is-update="true"
    :post="fetchedPost"
    @submit="updatePost($event)"
  />
</template>

<script>
import PostForm from "~/components/admin/PostForm";
import axios from "axios";
export default {
  name: "new-post",
  layout : "admin",
  components : {
    PostForm
  },
  asyncData(context){
    return axios.get("https://skorsky-blog-default-rtdb.firebaseio.com/posts/"+ context.params.postId+".json")
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
