<template>
        <section class="flex w-full">
            <div class="m-auto">
                <div>
                    <Create @new-user-added="addUser"/>
                    <table>
                        <thead>
                            <tr>
                                <th class="px-2 py-4 border">Id</th>
                                <th class="px-2 py-4 border">Avatar</th>
                                <th class="px-2 py-4 border">Name</th>
                                <th class="px-2 py-4 border">Email</th>
                                <th class="px-2 py-4 border">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="user in state.users" :key="user.id">
                            <td class="border px-4 py-2 ">{{ user._id }}</td>
                            <td class="border px-4 py-2 "><img :src=user.avatar :alt="user.first_name" width="50" class="rounded-full"></td>
                            <td class="border px-4 py-2 ">{{ user.name }}</td>
                            <td class="border px-4 py-2 ">{{ user.email }}</td>
                            <td class="border px-4 py-2 ">
                                <button class="px-2 py-2 bg-red-500 rounded text-white" @click="destroy(user._id)">Delete</button>
                            </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="flex justify-between">
                        <button class="border mt-2 w-20 shadow" @click="prev">Prev</button>
                        <button class="border mt-2 w-20 shadow" @click="next">Next</button>
                    </div>
                </div>
            </div>
            
        </section>
</template>
<script>
import {onMounted, reactive} from 'vue';
import axios from '../plugins/axios'
import Create from '../components/UserCrud/create'
export default {
    components:{Create},
    setup() {
        const state = reactive({
            users:[],        
        });
        onMounted(async() => {
           const {data} = await axios.get(`users`);
           state.users = data;
        });
        async function next(){
            const {data} = await axios.get(`/users?page=2`);
           state.users = data;
        }
           async function prev(){
            const {data} = await axios.get(`/users?page=1`);
           state.users = data;
        }
        
        async function destroy(id){
           await axios.delete(`users/${id}`); 
           state.users = state.users.filter(user => user._id != id)
        }
        function addUser(data){
             state.users.push(data);
        }
        
        return {state, next, prev,destroy,addUser}
    },
}
</script>