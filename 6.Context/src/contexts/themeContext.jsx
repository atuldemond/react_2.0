import { createContext, useState } from "react";

export const ThemeContext = createContext();

// export function ThemeProvider({ childeren }) {
//   const [count, setCount] = useState(100);

//   return (
//     <ThemeContext.Provider value={[count, setCount]}>
//       {childeren}
//     </ThemeContext.Provider>
//   );
// }
