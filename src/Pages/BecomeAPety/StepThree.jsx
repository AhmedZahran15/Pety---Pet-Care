import { Link } from "react-router-dom";
import Labels from "./Labels"
import toast, { Toaster } from 'react-hot-toast';
import { useContext} from "react";
import FormContext from "../../contexts/FormContext";

function handleClick() {
  
  toast('Your Appliction has been submitted successfully!');
}
function StepThree() {
  const {Address,SetAddress,Phone,setPhone,EmailAddress,setEmailAddress}=useContext(FormContext)
  return <div>
  <div className=" bg-neutral-100 flex   w-full   flex-col    items-center pt-40  ">

  <div className="h-1 w-2/5 bg-neutral-200 ">
            <div className="h-1 bg-primary" style={{ width: "66%" }}></div>
            <div className=" flex justify-around ">
            <div className="text-black  font-normal  text-lg  font-[Montserrat] ">Name</div>
            <div className="text-black  font-normal  text-lg font-[Montserrat] ">Service</div>
            <div className="text-black  font-normal  text-lg  font-[Montserrat] ">
  
  Contact info</div>
            </div>
        </div>
  
  
              <form className=" border-0 rounded-lg bg-white mt-14   w-3/6  pb-8  ">
  <Labels
  LabelText="Enter Your Address"
  Fieldinput={Address}
SetFieldInput={SetAddress}
  />
  <Labels
  LabelText="Enter Your Phone Number"
  Fieldinput={Phone}
  SetFieldInput={setPhone}
  
  />
   <Labels
  LabelText="Enter Your Email Address"
  
  Fieldinput={EmailAddress}
  SetFieldInput={setEmailAddress}/>
  <div className="mt-6 ml-6 flex items-center justify-start gap-x-6">
  <Link onClick={handleClick}
            type="submit"
            className="rounded-md bg-[#ffa500] px-12 py-4 text-sm font-semibold text-white ">
            Submit 
          </Link>
  <Link
            type="submit"
            className="rounded-md ml-6 bg-[#707070] px-12 py-4 text-sm font-semibold text-white "
            to={"/becomeAPety/steptwo"}
          >
            Back
          </Link>
  
        </div>
        </form>
          </div>
          </div>
  ;
}

export default StepThree;
