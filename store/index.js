import Vuex from "vuex";
import axios from "axios";

const createStore = () => {
  return new Vuex.Store({
    state : {
      fetchedPosts : []
    },
    mutations : {
      setPosts(state, posts){
        state.fetchedPosts = posts;
      },
      addPost(state, post){
        state.fetchedPosts.push(post);
      },
      updatePost(state,updatedPost){
        let index = state.fetchedPosts.findIndex( post =>  post.id == updatedPost.id )
          state.fetchedPosts[index] = updatedPost
      }
    },
    actions : {
      nuxtServerInit(vuexContext){
        return axios.get("https://skorsky-blog-default-rtdb.firebaseio.com/posts.json")
          .then(response => {
            let postArray = [];
            let data = response.data;
            for(let key in data){
              postArray.push({id : key, ...data[key]})
            }
            vuexContext.commit("setPosts",postArray)
          })
      },
      setPosts(vuexContext, posts){
        vuexContext.commit("setPosts", posts);
      },
      addPost(vuexContext, addedPost){
        return axios.post("https://skorsky-blog-default-rtdb.firebaseio.com/posts.json",addedPost)
          .then(response => {
            vuexContext.commit("addPost",{ ...addedPost, id : response.data.name });
          })
      },
      updatedPost(vuexContext, updatedPost){
        return axios.put("https://skorsky-blog-default-rtdb.firebaseio.com/posts/"+ updatedPost.id +".json",updatedPost)
          .then(response => {
            vuexContext.commit("updatePost", updatedPost)
          })
          .catch(e => {
            console.log(e)
          })
      }
    },
    getters : {
      getPosts(state){
        return state.fetchedPosts
      }
    }
  })
}

export default createStore
