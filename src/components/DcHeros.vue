<template lang="">
    <div class="m-auto ">
      <h1 class="text-2xl text-center">DC Heros {{herosCount}}</h1>
    <ul>
    <li v-for="(hero,index) in dcHeros" :key="hero.name" class="flex justify-between border border-indigo-600">
    <div>{{ hero.name }}</div>
    <button v-on:click="remove(index)">x</button>
    </li>
    </ul>
    <form @submit.prevent="addhero" class="mt-10">
      <input type="text" v-model.lazy="newhero" class="border rounded">
      <button :disabled="isDisabled" class="border rounded bg-gradient-to-r from-red-700 to-pink-500  text-white">Add hero</button>
    </form>
    </div>
</template>
<script>
export default {
    data(){
    return {
      isDisabled:false,
      newhero:'Aquaman',
      dcHeros:[
      {name:'SuperGirl'},
      {name:'SuperMan'},
      {name:'Flash'},
      {name:'Batman'},
      {name:'Robin'}
    ]
      }
  },
  methods: {
    addhero(){
     if(this.newhero !== ''){
        this.dcHeros.push({name: this.newhero}) 
        this.newhero =''
     }
    },
    remove(index){
      this.dcHeros = this.dcHeros.filter((hero,i)=> i != index);
    }
  },
  computed: {
    herosCount(){
      return this.dcHeros.length
    }
  },
}
</script>
<style lang="">
    
</style>