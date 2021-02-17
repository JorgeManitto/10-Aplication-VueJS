<template >
    <div class="m-auto">
        <h2 class="text-center">Home</h2>
    </div>
</template>
<script>
export default {
    data(){
        return{
            store : this.$store.state
            }
    },
    mounted() {
        console.log(this.store);
    },
}
</script>
<style lang="">
    
</style>