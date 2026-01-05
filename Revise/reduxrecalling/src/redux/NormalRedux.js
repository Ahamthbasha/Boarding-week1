import buyCake from "./actions/cakeActions";
import store from "./store";


console.log(store.getState())
store.dispatch(buyCake())
console.log(store.getState())