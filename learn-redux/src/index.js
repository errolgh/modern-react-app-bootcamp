import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'
import rootReducer from './reducers'
import { Provider } from 'react-redux'

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)



ReactDOM.render(
  <React.StrictMode>
<App />
</React.StrictMode>, document.getElementById('root')
);




// //STORE -> globalized state object

// //ACTION -> a name for a state change (called)
// const increment = () => {
//   return {
//     type: 'INCREMENT'
//   }
// }

// const decrement = () => {
//   return {
//     type: 'DECREMENT'
//   }
// }
// // a function that returns an object


// //REDUCER -> describes how your ACTIONS change the STORE
// const counter = (state = 0, action) =>{
//   switch(action.type){
//     case 'INCREMENT':
//       return state + 1
//       case 'DECREMENT':
//         return state - 1
//   }
// }


// // your state (STORE) will change based on the ACTION the REDUCER receives
    
    
// let store = createStore(counter)
  
// store.subscribe(() => console.log(store.getState()))


// //DISPATCH -> execute ACTIONS
// store.dispatch(increment())
// store.dispatch(increment())
// store.dispatch(decrement())


// // "DISPATCH this ACTION to the REDUCER to update the STORE."
    
