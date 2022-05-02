import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state : {
      fetchedPosts : []
    },
    mutations : {
      setPosts(state, posts){
        state.fetchedPosts = posts
      }
    },
    actions : {
      nuxtServerInit(vuexContext,context){
        vuexContext.commit("setPosts", [
          {id : 1, author:"Hasan Hüseyin Alav", title: "Ruhi Mücerret", subTitle: "Kitapta geçen güzel bir paragraf", text:"“Benliğinin rotasını çizmek üzere İlahî yardım talep eden kulun telaffuz ettiği her hece dünyayı değiştirir.”"},
          {id : 2, author:"Hasan Hüseyin Alav", title: "Ruhi Mücerret", subTitle: "Kitapta geçen güzel bir paragraf", text: "“Allah niyetlerimiz ile akıbetimiz arasındaki bağı rahmetiyle kursun.”"},
          {id : 3, author:"Hasan Hüseyin Alav", title: "Ruhi Mücerret", subTitle: "Kitapta geçen güzel bir paragraf", text: "“Hakikat; hayal ile hile arasındadır. Varlık; yokluk ile hiçlik arasında.”"},
          {id : 3, author:"Hasan Hüseyin Alav", title: "Ruhi Mücerret", subTitle: "Kitapta geçen güzel bir paragraf", text: "“Umut, gerçeklerle; umutsuzluk ise hayatla bağını gevşetiyor insanın. Kaderime tebelleş, vicdanıma musallat olan hamakat, rezalet vaat ediyor.”"},
          {id : 3, author:"Hasan Hüseyin Alav", title: "Ruhi Mücerret", subTitle: "Kitapta geçen güzel bir paragraf", text: "“Mazideki kederleri hatırlamanın sağlayacağı koruma, unutmanın getireceği huzurun yanında bir hiçtir.”"}
        ])
      },
      setPosts(vuexContext, posts){
        vuexContext.commit("setPosts", posts);
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
