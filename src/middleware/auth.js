export default function(next,Store){
    if(!Store.state.isLoggedIn){
        next('/');
    }else{
        next();
    }
}