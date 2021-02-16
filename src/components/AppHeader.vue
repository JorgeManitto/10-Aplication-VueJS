<template >
    <nav class="w-full bg-blue-800 text-white text-3xl"> 
        <router-link class="mx-2" v-for="item in list" :key="item" :to=item.to>{{item.title}}</router-link> 
        <div class="float-right">
            <button v-if="isLoggedIn" class="mx-2" @click="logout">Logout</button>
            <button v-else class="mx-2" @click="$emit('open-login-modal')">Login</button>   
        </div>      
    </nav>
</template>
<script>
import firebase from '../utilities/firabase'
export default {
    props:{"isLoggedIn":{type:Boolean, required:false}},
    data(){
        return {
            list : [
                {title:"Home" ,to : "/"},
                {title:"Dc Heros" ,to : "/DcHeros"},
                {title:"Calendar" ,to : "/Calendar"},
                {title:"Markdawn" ,to : "/Markdawn"},
                {title:"Slider" ,to : "/Slider"},
                {title:"Calculator" ,to : "/Calculator"},
                {title:"Modal" ,to : "/modal"},
                {title:"Chat" ,to : "/chat"},
            ],
            
        }
    },
    methods: {
        logout(){
            firebase.auth().signOut()
            .then(res => {
                console.log(res);
            }).catch(error => {
                console.log(error);
            });     
        }
    },
}
</script>
<style >
    
</style>
