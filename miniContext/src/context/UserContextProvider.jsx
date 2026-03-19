import React, { Children } from "react"
import UserContext from "./UserContext.js"

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null);

    return(
        <UserContext.Provider value={{user}}>
            {children}        
        </UserContext.Provider>
    )

}

export default UserContextProvider