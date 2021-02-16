<template>
    <div>
        <section class="mt-11 text-center">
                        <button class=" p-4 border" @click="loginWithGoogle">Login with google</button>
                    </section>
    </div>
</template>
<script>
import firebase from '../../utilities/firabase'
export default {
    methods: {
        loginWithGoogle(){
        var provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider)
            .then(()=>{
            this.$emit('close-login-from-google');
        });
        }
    },
}
</script>
<style>

</style>