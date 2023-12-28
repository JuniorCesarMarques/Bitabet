import { useState, createContext } from "react";

export const HeaderContext = createContext();

export const HeaderProvider = ({children}) => {
    const [totalValue, setTotalValue] = useState(100)
    const [display, setDisplay] = useState("menu_hidden");
    const [users, setUsers] = useState([]);

    //Animation states
    const [condition, setCondition] = useState(false);
    const [animationValue, setAnimationValue] = useState(0);
    const [operator, setOperator] = useState("");
    const [animation, setAnimation] = useState({})

    return (

        <HeaderContext.Provider value={{animation, setAnimation, setCondition, condition, operator, setOperator, animationValue, setAnimationValue,users, setUsers, display,setDisplay, totalValue, setTotalValue}}>
            {children}
        </HeaderContext.Provider>
        );
    };