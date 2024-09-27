import { createContext } from "react";

export const MyContext = createContext<boolean>(true);




// interface MyContextValue {
//   bool: boolean,
//   color: string,
// }

// const MyContext = createContext<MyContextValue>({
//    bool: true,
//    color: '',
// })

// export default MyContext;

