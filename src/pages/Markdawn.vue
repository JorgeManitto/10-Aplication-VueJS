<template>
    <div class="flex flex-wrap w-full">
        <h2 class="w-full text-4xl text-center">Markdawn</h2>
        <section class="flex m-auto w-10/12 h-screen">
            <article class="w-1/2 border">
                <textarea class="w-full h-full" :value="text" @input="update"></textarea>
            </article>
            <article class="w-1/2 border bg-gray-100" v-html="markedText"></article>
        </section>
    </div>
</template>
<script>
import marked from 'marked'
// import useDebounce from '../utilities/composition/useDebounce'
export default {
    setup() {
    //    const {debounce} = useDebounce();
    },
    data(){
        return {
            text:"",
            timeout:'',
        }
    },
    computed:{
        markedText(){
            return marked(this.text)
        }
    },
    methods: {
        update(e){
            clearTimeout(this.timeout);
           this.timeout =  setTimeout(() => {
                this.text = e.target.value; 
            }, 500);
        }
    },
}
</script>
<style >
    
</style>