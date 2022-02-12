import {createContext,useState } from "react";


export const InputTextContext = createContext();

export const InputTextContextProvider = ({children}) =>{

    const [inputValues, setInputValues] = useState({});

    return (
        <InputTextContext.Provider
            value={{
                inputValues,
                setInputValues
            }}
        >
            {children}
        </InputTextContext.Provider>

    )
}