import Labels from "./Labels"
import { Link } from "react-router-dom";
import FormContext from "../../contexts/FormContext";
import { useContext } from "react";
import { validateName } from "../../utils/validationFunctions";


function StepOne() {
  const {Username,setUsername,ServiceName,setServiceName}=useContext(FormContext)
 
    return (
        <div className=" bg-neutral-100 flex   w-full   flex-col    items-center pt-40  ">

<div className="h-1 w-2/5 bg-neutral-200 ">
          <div className="h-1 bg-primary" style={{ width: "0%" }}></div>
          <div className=" flex justify-around ">
          <div className="text-black  font-normal  text-lg  font-[Montserrat] ">Name</div>
          <div className="text-black  font-normal  text-lg font-[Montserrat] ">Service</div>
          <div className="text-black  font-normal  text-lg  font-[Montserrat] ">

Contact info</div>
          </div>
      </div>


            <form className=" border-0 rounded-lg bg-white mt-14   w-3/6  pb-8  ">
<Labels
LabelText="Enter Your Name"
Fieldinput={Username}
SetFieldInput={setUsername}

/>
<Labels
LabelText="Enter Your Service / Service Name"
Fieldinput={ServiceName}
SetFieldInput={setServiceName}
/>
<div className="mt-6 ml-6 flex items-center justify-start gap-x-6">
<Link
          className="rounded-md bg-[#ffa500] px-12 py-4 text-sm font-semibold text-white "
          to={"/becomeAPety/steptwo"}  >
          Next
        </Link>


      </div>
      </form>
        </div>

    )
}

export default StepOne
