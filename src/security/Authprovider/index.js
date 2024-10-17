import React, {createContext, useState, useContext} from "react";

const altContext = createContext({
    token: null,
    setToken: () => { },
  });
  
  export default altContext;

export const StoreContext= ({ children }) => {
    const [token, setToken] = useState(null);

    const login = (returnedToken) => setToken(returnedToken);
    const logout = () => setToken(null);

    return (
        <StoreContext.Provider value={{token, login, logout }}>
            {children}
        </StoreContext.Provider>
    );
};

export const useStorege= () => {
    const context = useContext(StoreContext);
    if(!context){
        throw new Error("useAuth deve ser usado dentro de um AuthProvider");
    } 
    return context
};