import {createRouter,createWebHistory} from "vue-router";
import DcHeros from "./pages/DcHeros"
import Calendar from "./pages/Calendar"
import Markdawn from "./pages/Markdawn"
import Slider from "./pages/Slider"
import Home from "./pages/Home"
import Calculator from "./pages/Calculator";
// import UserCrud from "./pages/UserCrud";
import reusableModal from "./pages/reusableModal";
import Chat from "./pages/Chat";
import Store from './store/index'

const routes = [
    {path:'/', component:Home},
    {path:'/DcHeros', component:DcHeros},
    {path:'/Calendar', component:Calendar},
    {path:'/Markdawn', component:Markdawn},
    {path:'/Slider', component:Slider},
    {path:'/Calculator', component:Calculator},
    {path:'/modal', component:reusableModal},
    // {path:'/usercrud', component:UserCrud},
    {path:'/chat', component:Chat,
    meta: { middleware: "auth"}},
]
const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to,_,next)=>{
    if(to.meta.middleware){
    const middleware = require(`./middleware/${to.meta.middleware}`)
    if(middleware){
        middleware.default(next,Store);
    }else{
        next()
    }
    }else{
        next()
    }
})
export default router;