import {createStore} from 'redux';


// Step 3 Define reducers
const reducer = function (state={books:[]}, action){
switch(action.type){
case "POST_BOOK":
let books = state.books.concat(action.payload)
return {books};
break;
case "DELETE_BOOK":
const currentBookToDelete = [...state.books]

const indexToDelete = currentBookToDelete.findIndex(
      function(book){

            return book.id === action.payload.id;
      }
)

return{books:[...currentBookToDelete.slice(0,indexToDelete),
      ...currentBookToDelete.slice(indexToDelete+1)]}

  break;
}
return state

}

//Step 1 create store 

const store = createStore(reducer);

store.subscribe (() => {
console.log('current state:' , store.getState());
//console.log('current price:' , store.getState()[1].price);
})

// Step 2 Create & dispatch actions 

store.dispatch({
	type:"POST_BOOK" ,
	 payload:[{
       id:1,
       title:'this is a title',
       description:'this is the description',
       price :33.33

	 },
	 {
	   id:2,
       title:'this is another title',
       description:'this is the second description',
       price :43.33

	 }]

	})

  store.dispatch({
	type:"DELETE_BOOK" ,
	 payload:{
       id:1,
       title:'this is the third title',
       description:'this is the description',
       price :55.33

	 }

	})

