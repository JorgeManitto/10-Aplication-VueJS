<template>
    <div class="m-auto">
        <h1 class="text-4xl my-2 text-center">Vue Calendar</h1>
        
        <section class="mx-2 flex">
             <h2 class="font-bold text-2xl">{{ currentMonthName }}</h2>
             <h2 class="font-bold text-2xl ml-3">{{ currentYear }}</h2>
             
        </section>
        <section class="flex">
        <p class="text-2xl text-center" style="width:14.28%;" v-for="day in days" :key="day" >{{day}}</p>
        </section>
        <section class="flex flex-wrap">
          <p class="text-center" style="width:14.28%;" v-for="num in starDay()" :key="num">
                    
            </p>
            <p class="text-center" style="width:14.28%;" v-for="num in daysInMonth(currentYear, currentMonth)" :key="num" :class="currentDateClass(num)">
                    {{num}}
            </p>
        </section>
        <section class="flex justify-between my-4">
            <button class="px-2 border rounded" @click="prev">Prev</button>
            <button class="px-2 border rounded" @click="next">Next</button>
        </section>
    </div>
</template>
<script>
export default {

    data(){
        return {
            currentDate: new Date().getUTCDate(),
            currentMonth:new Date().getMonth(),
            currentYear : new Date().getUTCFullYear(),
            days:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
        }
    },
    methods: {
        daysInMonth(year,month){
            // const month = new Date().getMonth()+1;
            return new Date(year,month +1,0).getDate();
        },
        starDay(){
            return new Date(this.currentYear,this.currentMonth,1).getDay();
        },
        next(){
            if (this.currentMonth === 11) {
                this.currentMonth = 0;
                this.currentYear++;
            }else{
                this.currentMonth++;
            }
        },
         prev(){
              if(this.currentMonth === 0){
                    this.currentMonth = 11
                    this.currentYear--
                }else{
                    this.currentMonth--;
                }
            
        },
        currentDateClass(num){
            const calendarFullDate = new Date(this.currentYear,this.currentMonth,num).toDateString();
            const currentFullDate  = new Date().toDateString();
            console.log(currentFullDate);
            return calendarFullDate === currentFullDate ? 'text-yellow-600' : '';
        }
    },
    computed:{
        currentMonthName(){
            return new Date(this.currentYear,this.currentMonth).toLocaleString('default',{month:'long'})
        }
    },
}
</script>
<style>
    
</style>