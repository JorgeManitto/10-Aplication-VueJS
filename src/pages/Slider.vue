<template >
    <div class="flex flex-wrap w-full relative">
        <div class="absolute w-full" v-for="(color,index) in slider" :key="index" style="overflow: hidden;">
            <transition name="fade">
                <div v-if="currentSlide == index" :class="color" style="height: 350px;"></div>           
            </transition>
        </div>
    <div class="w-full" style="height:350px">
        <div class="absolute bottom-4 w-full flex justify-center">
            <div  class="w-8 h-8 cursor-pointer rounded-full mx-2" @click="makeActive(index)" v-for="(slide, index) in slider" :key="index"
            :class="currentSlide === index ?'bg-gray-700':'bg-gray-300'"></div>
        </div>
    </div>
    </div>
    
</template>
<script>
export default {
    data() {
        return {
            currentSlide : 0,
            slider:['bg-blue-600','bg-yellow-600','bg-pink-600'],
            interval : '',
            isTitleShowing : true,
        }
    },
    methods: {
        makeActive(index){
            this.currentSlide = index
        }
    },
    mounted() {
       this.interval = setInterval(() => {
           this.currentSlide === 2 ? this.currentSlide = 0 : this.currentSlide++;
        }, 4000);
    },
    unmounted() {
        clearInterval(this.interval)
    },
}
</script>
<style >
.fade-enter-active, .fade-leave-active {
    transition: all 1s ease;
   
}
.fade-enter-from{
    opacity: 0;
    transform: translateX(-100%);
}
.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: .7;
    transform: translateX(100%);
}
</style>

