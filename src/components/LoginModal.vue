<template >
  
        <section @click="close()" class="h-screen w-screen bg-gray-500 fixed top-0 opacity-50 z-10" >
        </section>
        <div class="absolute inset-0">
            <div class="flex h-full">
                <div class="m-auto z-20 bg-white p-2 rounded shadow w-1/3">
                    <h2 class="text-center text-4xl">LOGIN</h2>
                    <GoogleLogin @close-login-from-google="close()"/>
                    <p class="my-2 text-center">Or</p>
                    <form class="p-4 my-4" @submit.prevent="submit()">
                        <div class="my-2">
                        <label for='email'>email:</label>
                        <input ref="emailRef" v-model="email" type="email" name="email" class="rounded shadow p-2 w-full">
                        </div>
                        <div class="my-2">
                            <label for='password'>Password:</label>
                            <input v-model="password" type="password" name="password" class="rounded shadow p-2 w-full">
                        </div>
                        <div class="my-8">
                            <button class="w-full rounded shadow-md bg-gradient-to-r from-red-800 to-pink-800 text-white" >
                            <span v-if="!isloading">Enter</span>
                            <span v-else>⌛</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    
</template>
<script>
import firebase from '../utilities/firabase'
import GoogleLogin from './Login/GoogleLogin'

export default {
    components:{GoogleLogin,},
    data() {
        return {
                email:'',
                password:'',
                isloading:false,
        }
    },
    mounted() {
        this.$refs.emailRef.focus();
    },
    methods: {
        submit(){
            this.isloading = true
            // axios.post('url',{email:this.email,password:this.password})
            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then(() =>{
                this.isloading = false
                this.close();
            })
            .catch(e=>{
                this.isloading = false
                console.log(e);
            })
        },
        close(){
            this.$emit('close-login');
        },

    },
}
</script>
<style lang="">
    
</style>