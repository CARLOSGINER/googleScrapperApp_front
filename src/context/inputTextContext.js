import {createContext,useState } from "react";


export const InputTextContext = createContext();

export const InputTextContextProvider = ({children}) =>{

    const [text1, setText1] = useState("");
    const [text2, setText2] = useState("");

    return (
        <InputTextContext.Provider
            value={{
                text1,
                text2,
                setText1,
                setText2
            }}
        >
            {children}
        </InputTextContext.Provider>

    )
}