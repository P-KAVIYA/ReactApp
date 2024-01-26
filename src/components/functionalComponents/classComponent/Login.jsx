// import { useState } from "react" 
// const Login=()=>{
//         const [login,updateexpansion]=useState("Login here")
//         const updatingexp=()=>{
//             // console.log("Hello")
//             updateexpansion("If you have already registred please login here by entering your credentials")
//         }
//         return(
//             <div>
//                 <h1  onMouseOver={updatingexp}>Kindly {login}</h1>
//                 {/* <a href="mailto:kaviyap.21ece@kongu.edu">kaviyap.21ece@kongu.edu</a> */}
//             </div>
//         )

// }

// export default Login

import { useReducer } from "react";
const initialState = { count: 0 };
function countFunc(state, action) {
  switch (action.type) {
    case 'sub':
      return { count: state.count - 1 };
    case 'add':
      return { count: state.count + 1 };
    case 'reset':
      return initialState; // Reset to the initial state
    default:
      return state; // Return the current state for unknown actions
  }
};
const Login = () =>{
  const [state, dispatch] = useReducer(countFunc, initialState);
  return (
    <div>
      <h1>This is useReducer Example</h1>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: 'sub' })}>Subtract</button>
      <button onClick={() => dispatch({ type: 'add' })}>Add</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      <h1>Login if already registered</h1>
    </div>
  );
}
export default Login;
