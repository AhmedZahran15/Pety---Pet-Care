import  {useContext,useState,createContext } from "react";

const FormContext= createContext();
export const FormProvider = ( {children})=>{

  const [Username,setUsername ]=useState("");
  const [ServiceName,setServiceName ]=useState("");
  const [ServiceChoice, setServiceChoice] = useState("")
  const [ServiceDescription,setServiceDescription]=useState("");
  const [ServicePrice,setServicePrice]=useState("");
  const [Address,SetAddress]=useState("");
  const [Phone,setPhone]=useState("");
  const [EmailAddress,setEmailAddress]=useState("");
  return(
<FormContext.Provider value={{Username,setUsername,ServiceName,setServiceName,ServiceChoice, setServiceChoice,ServiceDescription,setServiceDescription,ServicePrice,setServicePrice,Address,SetAddress,Phone,setPhone,EmailAddress,setEmailAddress}}>
    
   {children} </FormContext.Provider>
    
  );
  
}

export default FormContext