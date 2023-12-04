import { useState, createContext } from "react";

export const HeaderContext = createContext();

export const HeaderProvider = ({children}) => {
    const [totalValue, setTotalValue] = useState(100)
    const [display, setDisplay] = useState("menu_hidden");

    return (

        <HeaderContext.Provider value={{display,setDisplay, totalValue, setTotalValue}}>
            {children}
        </HeaderContext.Provider>
        );
    };