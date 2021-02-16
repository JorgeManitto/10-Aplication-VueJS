<template>
    <section class="w-full flex">
        <div class="m-auto">
            <h2 class="text-4xl">Real time chat</h2>
            <div class="border rounded-lg">
                <div class="h-64 p-2 overflow-auto">
                     <div v-for="chat in state.chats" :key="chat.message" class="w-full text-3xl " 
                     :class="chat.userId === state.userId ? 'text-right' : ''">
                        {{ chat.message }}
                     </div>
                </div>
                <div class="h-8 p-2">
                <input type="text" class="border shadow rounded text-2xl" v-model="state.message" placeholder="Start typing..."
                @keydown.enter="addMessage">
                </div>
            </div>
        </div>
        
    </section>
    
</template>

<script>
import {onMounted,reactive} from 'vue'
import firabase,{chatsRef} from '../utilities/firabase'
export default {
    setup() {
        const state = reactive({
            chats:[],
            message:'',
            userId: null,
        });
        // const chats = ref({})
        onMounted(async () => {

            chatsRef.on("child_added", (snapshot)=>{
                state.userId = firabase.auth().currentUser.uid;
                state.chats.push({key:snapshot.key, ...snapshot.val()});
                // state.chats = snapshot.val();
          });
        })
        function addMessage(){
            const newChat = chatsRef.push();
            newChat.set({ userId:state.userId, message:state.message });
            state.message = '';
        }
        return {state, addMessage};
    }
}
</script>