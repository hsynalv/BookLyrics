<template>
  <div>
    <PostList :posts="fetchedPosts"/>
    <About/>
  </div>
</template>

<script>
import PostList from "~/components/post/postList";
import About from "~/components/Home/About";
export default {
  name: 'IndexPage',
  layout : "homePage",
  components : {
    PostList,
    About
  },
  computed : {
    fetchedPosts(){
      return this.$store.getters.getPosts
    }
  },
  created() {},
}
</script>
