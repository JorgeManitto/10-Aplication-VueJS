<template >
    <div class="m-auto ">
      <h1 class="text-2xl text-center">DC Heros {{herosCount}}</h1>
    <ul>
    <li v-for="(hero,index) in dcHeros" :key="hero.name" class="flex justify-between border border-indigo-600">
    <div>{{ hero.name }}</div>
    <button v-on:click="remove(index)">x</button>
    </li>
    </ul>
    <form @submit.prevent="addhero" class="mt-10">
      <input ref="newheroRef" type="text" v-model.lazy="newhero" class="border rounded">
      <button :disabled="isDisabled" class="border rounded bg-gradient-to-r from-red-700 to-pink-500  text-white">Add hero</button>
    </form>
    </div>
</template>
<script>
import {ref} from 'vue';
export default {
    setup() {
      const newhero = ref('Aquaman');
      const dcHeros = ref([
      {name:'SuperGirl'},
      {name:'SuperMan'},
      {name:'Flash'},
      {name:'Batman'},
      {name:'Robin'}
    ]);
     function remove(index){
      dcHeros.value = dcHeros.value.filter((hero,i)=> i != index);
    }
    function addhero(){
     if(newhero.value !== ''){
        dcHeros.value.push({name: newhero.value}) 
        newhero.value =''
     }
    }
    return {dcHeros, newhero, remove,addhero}
    },
    data(){
    return {
      isDisabled:false,
      }
  },
  methods: {},
  computed: {
    herosCount(){
      return this.dcHeros.length
    }
  },
  mounted() {
    this.$refs.newheroRef.focus();
  },
}
</script>
<style lang="">
    
</style>