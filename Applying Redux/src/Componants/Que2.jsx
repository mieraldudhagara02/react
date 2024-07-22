import React from 'react'
// import { legacy_createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from '../reducer';

// const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default function Que2() {

  return (
    <>
    
        <h3>Que 2: What is Redux Thunk used for?</h3>
        <h4>Answer:</h4>
    
        <p>Redux Thunk is a tool used in Redux, which is a state management library for JavaScript applications, particularly with React. Here's a simple explanation:</p>
        <br />

        <ol>
            <li><b>Handles Async Actions: </b> Normally, Redux actions are immediate and synchronous, meaning they happen right away. However, sometimes you need to do things that take time, like fetching data from the internet. Redux Thunk allows you to handle these asynchronous (async) actions.</li>
            <li><b>Allows Functions in Actions: </b> With Redux Thunk, your action creators can return functions (called "thunks") instead of just action objects. These functions can delay the dispatch of actions and can perform async tasks.</li>
            <li><b>Access State and Dispatch:</b>  Thunks can use the current state and dispatch actions at the right time. This helps in making decisions and performing complex operations based on the app's state.</li>
            
        </ol>
        <br />

        <b>Example:</b>
        <p>In this example, fetchData is an action that fetches data from an API. It first dispatches a "request" action, then fetches the data, and finally dispatches either a "success" or "failure" action based on the result.</p>

    </>
    
  )
  
}
// actions.js
// export const fetchData = () => {
//     return (dispatch) => {
//       dispatch({ type: 'FETCH_DATA_REQUEST' });
  
//       fetch('https://api.example.com/data')
//         .then(response => response.json())
//         .then(data => dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data }))
//         .catch(error => dispatch({ type: 'FETCH_DATA_FAILURE', error }));
//     };
//   };
  
