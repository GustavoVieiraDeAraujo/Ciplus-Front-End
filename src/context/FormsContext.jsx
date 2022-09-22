import React, {useState} from "react";

export const FormsContext = React.createContext();

export const FormsProvider = ({children}) =>{

    const [formValues, setFormValues] = useState({})

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

   return(
       <FormsContext.Provider value={{formValues, handleInputChange}}>
        {children}
       </FormsContext.Provider>
   )

}