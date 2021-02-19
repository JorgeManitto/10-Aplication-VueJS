<template >
    <button class="py-2 px-1 rounded shadow my-4" @click="isModalOpen = true">Add user</button>
    <teleport to='body'>
                <modal v-if="isModalOpen" @close="isModalOpen = false">
                    <template #title>                   
                           Add new user 
                    </template>
                    <template #body class="">
                        <form @submit.prevent="submit">
                            <div class="p-2"><label>UserName</label><input v-model="state.form.name" class="p-2 w-full border rounded" type="text" placeholder="User Name"></div>
                            <div class="p-2"><label>Email</label><input v-model="state.form.email" class="p-2 w-full border rounded" type="email" placeholder="Email"></div>
                            <div class="p-2"><label>Avatar</label><input v-model="state.form.avatar" class="p-2 w-full border rounded" type="text" placeholder="Avatar URL"></div>
                            <div class="p-2"><input type="submit" value="Create" class="p-2 w-full border rounded cursor-pointer hover:opacity-60"></div>
                        </form>
                    </template>
                </modal>
            </teleport>
</template>
<script>
import modal from '../Modal';
import {reactive, ref} from 'vue';
import axios from '../../plugins/axios';
export default {
    components:{ modal },
    setup(_,{emit}) {
        const isModalOpen = ref(false);
          const state = reactive({
                    form:{
                name:"",
                email:"",
                avatar:"",
            }
    })
        async  function submit(){
            const {data} = await axios.post('/users',state.form);
            emit('new-user-added',data);
            state.form.name   = "";
            state.form.email  = "";
            state.form.avatar = "";
            isModalOpen.value = false;
        }
        return {isModalOpen,submit,state}
    }
}
</script>
<style>
    
</style>