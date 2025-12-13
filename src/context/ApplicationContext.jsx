import { createContext } from "react";
import {applications} from "../assets/assets";

export const ApplicationContext = createContext();

const ApplicationContextProvider = (props) =>{

    const value = {
        applications
    }

    return(
        <ApplicationContext.Provider value={value}>
            {props.children}
        </ApplicationContext.Provider>
    )
}

export default ApplicationContextProvider;