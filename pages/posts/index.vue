<template>
  <div>
    <PostList :posts="fetchedPosts"/>
  </div>
</template>

<script>
import PostList from "~/components/post/postList";
export default {
  name: 'Index',
  components : {
    PostList,
  },
  computed : {
    fetchedPosts(){
      return this.$store.getters.getPosts
    }
  }
}
</script>
