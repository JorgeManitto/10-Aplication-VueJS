import { onMounted, onUnmounted } from 'vue'

export default function useWindowEvent(event,handelEvent){
    onMounted(() => {window.addEventListener(event,handelEvent)})
    onUnmounted(() => {window.removeEventListener(event,handelEvent)})
}