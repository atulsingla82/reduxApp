import {createStore} from 'redux';


// Step 3 Define reducers
const reducer = function (state=0, action){
switch(action.type){
case "INCREMENT":
return state + action.payload
break;
case "DECREMENT":
return state - action.payload
break;
}

return state

}

//Step 1 create store 

const store = createStore(reducer);

store.subscribe (() => {
console.log('current state:' + store.getState());
})

// Step 2 Create & dispatch actions 

store.dispatch({type:"INCREMENT" , payload:1})
store.dispatch({type:"INCREMENT" , payload:1})
store.dispatch({type:"DECREMENT" , payload:1})