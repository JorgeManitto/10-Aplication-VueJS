<template>
<AppHeader/>
  <div class="flex ">

    <!-- <DcHeros/> -->
    <Calendar/>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import Calendar  from './components/Calendar'
// import DcHeros from './components/DcHeros'
export default {
  components:{
    AppHeader,
    // DcHeros,
    Calendar,
  },
  
}
</script>

<style>

</style>
