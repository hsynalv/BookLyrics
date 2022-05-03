<template>
  <div>
    <div class="container d-flex justify-content-center align-items-center">
      <button class="btn btn-dark" @click="$router.push('/admin/new-post')">Yeni Bir Yazı Ekle</button>
    </div>
    <PostList
      :is-admin="true"
      :posts="fetchedPosts"
    />
  </div>
</template>

<script>
import PostList from "~/components/post/postList";
export default {
  layout : "admin",
  name: 'IndexPage',
  components : {
    PostList,
  },
  computed : {
    fetchedPosts() {
      return this.$store.getters.getPosts
    }
  }
}
</script>
