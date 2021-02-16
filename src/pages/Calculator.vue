<template>
        <section class="w-full flex">
            <div class="m-auto">
            <h2 class="text-4xl text-center">Calculator</h2>
                <p class="text-3xl text-right mt-4 mb-4 w-52 h-14 overflow-x-auto" style="direction:rtl">{{currentNubmer}}</p>
                <div class="h-10">
                <small class="overflow-x-auto w-5">{{prevNumber}} {{selectedOperation}}  {{currentNubmer}}</small>
                </div>
                <div class="my-4 grid grid-cols-4 gap-4">
                    <button class="py-2 border shadow w-10 h-10 rounded" @click="pressed('1')">1</button> 
                    <button class="py-2 border shadow w-10 h-10 rounded" @click="pressed('2')">2</button> 
                    <button class="py-2 border shadow w-10 h-10 rounded" @click="pressed('3')">3</button> 
                    <button class="py-2 border shadow w-10 h-10 rounded" @click="pressed('+')">+</button> 
                    <button class="py-2 border shadow w-10 h-10 rounded" @click="pressed('4')">4</button> 
                    <button class="py-2 border shadow w-10 h-10 rounded" @click="pressed('5')">5</button> 
                    <button class="py-2 border shadow w-10 h-10 rounded" @click="pressed('6')">6</button> 
                    <button class="py-2 border shadow w-10 h-10 rounded" @click="pressed('-')">-</button>        
                    <button class="py-2 border shadow w-10 h-10 rounded" @click="pressed('7')">7</button> 
                    <button class="py-2 border shadow w-10 h-10 rounded" @click="pressed('8')">8</button> 
                    <button class="py-2 border shadow w-10 h-10 rounded" @click="pressed('9')">9</button>
                    <button class="py-2 border shadow w-10 h-10 rounded" @click="pressed('*')">*</button> 
                    <button class="py-2 border shadow w-10 h-10 rounded"  @click="pressed('0')">0</button> 
                    <button class="py-2 border shadow w-10 h-10 rounded"  @click="pressed('c')">C</button> 
                    <button class="py-2 border shadow w-10 h-10 rounded"  @click="pressed('=')">=</button>
                    <button class="py-2 border shadow w-10 h-10 rounded" @click="pressed('/')">/</button> 
                </div>
            </div>
        </section>
</template>

<script>
import {ref} from 'vue'
import useWindowEvent from '../utilities/composition/useWindowEvent'
export default {
    setup() {
        const currentNubmer = ref("");
        const operation = ['+','-','*','/'];
        const numbers = ['1','2','3','4','5','6','7','8','9','0']
        const prevNumber = ref("");
        const selectedOperation = ref("");

        function pressed(value){
            if(value == '='|| value =="Enter")calculate();
            else if(value === 'c') clear(); 
            else if(operation.includes(value))applyOperation(value);
            else if(numbers.includes(value))appendNumber(value);
        }
        function appendNumber(value){
            currentNubmer.value =currentNubmer.value + value;
        }
        function calculate(){
            if(selectedOperation.value == "+") sum();
            else if(selectedOperation.value == "-") subtract();
            else if(selectedOperation.value == "*") multiply();
            else if(selectedOperation.value == "/") div();

            prevNumber.value = '';
            selectedOperation.value = '';
        }
        function sum (){
            currentNubmer.value = parseInt(prevNumber.value) + parseInt(currentNubmer.value);
        }
        function subtract (){
            currentNubmer.value = prevNumber.value - currentNubmer.value;
        }
        function multiply (){
            currentNubmer.value = prevNumber.value * currentNubmer.value;
        }
        function div(){
            currentNubmer.value = prevNumber.value / currentNubmer.value;
        }
         function applyOperation(value){
            calculate()
            prevNumber.value = currentNubmer.value;
            currentNubmer.value = "";
            selectedOperation.value = value;
        }
        function clear(){
            currentNubmer.value = '';
        }
        const handleKeyDown = (e) => pressed(e.key);
        useWindowEvent('keydown',handleKeyDown);

        return {currentNubmer,pressed,selectedOperation,prevNumber}
    },
   
}
     
</script>