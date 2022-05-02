<template>
  <div>
    <PostList/>
  </div>
</template>

<script>
import PostList from "~/components/post/postList";
export default {
  name: 'Index',
  components : {
    PostList,
  }
}
</script>
