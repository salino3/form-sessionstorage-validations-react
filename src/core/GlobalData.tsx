import { createContext } from "react";
import { MyState } from "./interface";

export const GlobalData = createContext<MyState>({} as MyState)