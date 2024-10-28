import React from "react";

// import {useReducer} from 'react';

// interface State {
//    count: number 
// };

// type CounterAction =
//   | { type: "reset" }
//   | { type: "setCount"; value: State["count"] }

// const initialState: State = { count: 0 };

// function stateReducer(state: State, action: CounterAction): State {
//   switch (action.type) {
//     case "reset":
//       return initialState;
//     case "setCount":
//       return { ...state, count: action.value };
//     default:
//       throw new Error("Unknown action");
//   }
// }

// export default function App() {
//   const [state, dispatch] = useReducer(stateReducer, initialState);

//   const addFive = () => dispatch({ type: "setCount", value: state.count + 5 });
//   const reset = () => dispatch({ type: "reset" });

//   return (
//     <div>
//       <h1>Welcome to my counter</h1>

//       <p>Count: {state.count}</p>
//       <button onClick={addFive}>Add 5</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
// }
import { createContext, useContext, useState } from 'react';

type Theme = "light" | "dark" | "system";
const ThemeContext = createContext<Theme>("system");

const useGetTheme = () => useContext(ThemeContext);

export default function MyApp() {
  const [theme, setTheme] = useState<Theme>('light');

  return (
    <ThemeContext.Provider value={theme}>
      <MyComponent />
    </ThemeContext.Provider>
  )
}

function MyComponent() {
  const theme = useGetTheme();

  return (
    <div>
      <p>Current theme: {theme}</p>
    </div>
  )
}