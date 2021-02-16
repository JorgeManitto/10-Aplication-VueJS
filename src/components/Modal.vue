<template>
    <section @click="close()"  class="h-screen w-screen bg-gray-500 fixed top-0 opacity-50 z-10" >
        </section>
         <div class="absolute inset-0">
            <div class="flex h-full">
                <div class="m-auto z-20 bg-white p-2 rounded shadow w-1/3">
                    <div class="py-2 border">
                        <h2 class="text-4xl">
                             <slot name="title"></slot>
                        </h2>
                        <div>
                             <slot name="body"></slot>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
export default {
    setup(_,{emit}) {
        function close() {
            emit("close");
        }

        return {close}
    }
}
</script>