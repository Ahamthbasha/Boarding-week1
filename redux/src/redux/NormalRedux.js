import store from "./store";
import buyCake from "./actions/cakeAction";
import buyIcecream from "./actions/iceCreamAction";

console.log('intialState',store.getState())

store.dispatch(buyCake())
store.dispatch(buyIcecream())