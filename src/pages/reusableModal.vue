<template>
    <section class="w-full flex flex-wrap">
        <div class="m-auto  w-full">
            <h2 class="text-2xl my-5">Reusable Modal</h2>


            <Modal v-if="isModalOpen" @close='isModalOpen= false'>
                <template v-slot:title>
                    Titulo
                </template>
                <template v-slot:body>
                    contenido
                </template>
            </Modal>
            <button class="mx-2 px-4 rounded bg-green-500 border " @click="isModalOpen = true">Modal</button>

            <Modal v-if="isModalOpen2" @close='isModalOpen2= false'>
                  <template v-slot:title>
                    Titulo2
                </template>
                <template v-slot:body>
                    contenido2
                </template>
            </Modal>
            <button  class="mx-2 px-4 rounded bg-green-500 border " @click="isModalOpen2 = true">Modal2</button>
        </div>
    </section>    
</template>
<script>
import Modal from '../components/Modal'
import {ref} from 'vue'
export default {
    components:{Modal},
    setup() {
        const isModalOpen = ref (false);
        const isModalOpen2 = ref (false);
        return {isModalOpen,isModalOpen2}
    }
}
</script>