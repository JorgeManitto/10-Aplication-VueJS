import {createRouter,createWebHistory} from "vue-router";
import DcHeros from "./pages/DcHeros"
import Calendar from "./pages/Calendar"
import Markdawn from "./pages/Markdawn"
import Slider from "./pages/Slider"
import Home from "./pages/Home"
import  Calculator from "./pages/Calculator";
import  reusableModal from "./pages/reusableModal";
import  Chat from "./pages/Chat";
const routes = [
    {path:'/', component:Home},
    {path:'/DcHeros', component:DcHeros},
    {path:'/Calendar', component:Calendar},
    {path:'/Markdawn', component:Markdawn},
    {path:'/Slider', component:Slider},
    {path:'/Calculator', component:Calculator},
    {path:'/modal', component:reusableModal},
    {path:'/chat', component:Chat},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});



export default router;