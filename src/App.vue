<template>
<AppHeader :isLoggedIn="isLoggedIn"  @open-login-modal= 'isLoginOpen = true'/>
  <div class="flex ">
      <router-view></router-view>
  </div>
  <teleport to='body'>
  <LoginModal v-if="isLoginOpen" @close-login='isLoginOpen = false'/>
  </teleport>
</template>

<script>
import AppHeader from './components/AppHeader'
import LoginModal from './components/LoginModal'
import firebase from './utilities/firabase'

export default {
  data() {
        return {
            isLoginOpen:false,
            // isLoggedIn:false,
            // authUser:{},
        }
    },
  mounted() {
      firebase.auth().onAuthStateChanged((user)=> {
        if (user) {
          // console.log(user);
          this.$store.commit('setLoggedIn',true)
          this.$store.commit('setauthUser', user)
          console.log(user.uid);
          // this.isLoggedIn = true
          // this.authUser = user
        } else {
        // console.log('no auth');
        // this.isLoggedIn = false
        // this.authUser = {}
        this.$store.commit('setLoggedIn',false)
        this.$store.commit('setauthUser', {})
      }
    });
  },
  components:{
    AppHeader,
    LoginModal,
  },
}
</script>

<style>

</style>
