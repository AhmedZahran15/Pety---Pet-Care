import Labels from "./Labels"
import RadioButton from "../../components/RadioButton";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import FormContext from "../../contexts/FormContext";

function StepTwo() {

    const {ServiceDescription,setServiceDescription,ServicePrice,setServicePrice,ServiceChoice, setServiceChoice}=useContext(FormContext)
    const onOptionChange = e => {
        setServiceChoice(e.target.value)
      }
     

    return (
   
        <div className=" bg-neutral-100 flex   w-full   flex-col    items-center pt-40  ">

<div className="h-1 w-2/5 bg-neutral-200 ">
          <div className="h-1 bg-primary" style={{ width: "33%" }}></div>
          <div className=" flex justify-around ">
          <div className="text-black  font-normal  text-lg  font-[Montserrat] ">Name</div>
          <div className="text-black  font-normal  text-lg font-[Montserrat] ">Service</div>
          <div className="text-black  font-normal  text-lg  font-[Montserrat] ">

Contact info</div>
          </div>
      </div>


            <form className=" border-0 rounded-lg bg-white mt-14   w-3/6  pb-8  ">
                <div className="block text-sm font-medium leading-6 text-gray-900 ml-6 mt-8">
                What is Your Service?
                </div>
<div className="ml-6 ">
<RadioButton
              value="0"
              id="choice0"
              label="Pet Sitting"
              checked={ServiceChoice === "0"}
              onChange={onOptionChange}

            />
                           <RadioButton
         value="1"
              id="choice0"
              label="Pet Grooming"
              checked={ServiceChoice === "1"}
              onChange={onOptionChange}

 />
                         <RadioButton
 value="2"
              id="choice0"
              label="Veterinary Clinic"
              checked={ServiceChoice === "2"}
              onChange={onOptionChange}

            />
</div>
         

<Labels
LabelText="Describe Your Service / Specialty."
Fieldinput={ServiceDescription}
SetFieldInput={setServiceDescription}


/>
<Labels
LabelText="How Much is Your Service ?"
Fieldinput={ServicePrice}
SetFieldInput={setServicePrice}
/>
<div className="mt-6 ml-6 flex items-center justify-start gap-x-6">
<Link
          type="submit"
          className="rounded-md bg-[#ffa500] px-12 py-4 text-sm font-semibold text-white "
          to={"/becomeAPety/stepthree"}
        >
          Next
        </Link>
<Link
          type="submit"
          className="rounded-md ml-6 bg-[#707070] px-12 py-4 text-sm font-semibold text-white "
          to={"/becomeAPety/stepone"}
        >
          Back
        </Link>

      </div>
      </form>
        </div>
    )
}

export default StepTwo
