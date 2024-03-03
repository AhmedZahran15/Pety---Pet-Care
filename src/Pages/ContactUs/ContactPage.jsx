
import NormalInput from "./NormalInput";
import React, { useState } from 'react';
import { useReducer } from "react";
function ContactPage() {


const [charCount, setCharCount] = useState(0);
const initialState = {FirstName: '', LastName: '', Email: '', PhoneNumber: '', Message: ''};

function reducer(state,action) {

  return {...state, [action.input]: action.value};


}
function validateState(state){
  return state.FirstName.length > 0 && state.LastName.length > 0 && state.Email.length > 0 && state.PhoneNumber.length > 0  && charCount > 0;
}

const [state,dispatch] = useReducer(reducer,initialState);
console.log(state);
console.log({charCount});
function onChange(e)  {

  const action ={
    input :e.target.name,
    value: e.target.value
  }
dispatch(action);
}
  return (
    <div className="flex flex-row justify-between p-14  ">
  <div className=" w-3/6 space-y-4 text-lg lg:w-3/6  text-gray-700 m-10 hidden md:overflow-hidden  md:table-row">
    <p className="font-bold  text-6xl text-black">Contact Us
</p>

<p>Email, call, or complete the form to learn how<br></br>
petty can solve your Pets problem.</p>

<p className="lg:pb-24">info@petty.io

</p>



<div className="flex flex-row pt-20 gap-5   md:pt-6 md:flex-col  lg:flex-row      ">
<div className="basis-1/3  ">
<p>Customer Support</p>
Our support team is available
around the clock to address any
concerns or queries you may have.</div>
 
<div className=" basis-1/3">
<p>Feedback and Suggestions
</p>
Wo valve your feedback and are
continuously working to improve
petty. Your inputs crucial in
shaping th future of petty.</div>

<div className=" basis-1/3">
<p>Media Inquiries
</p>
For media-related questions or
press inquiies, please contact us
atmeda@pettyapp.com</div>

</div>

  </div>
  <form className="text-gray-500  pl-2    items-center p-10 lg:flex-col  lg:w-2/6 w-full sm:w-full  md:h-1/2  border-2  bg-white  md:w-3/4  rounded-2xl mt-10  "> 
<p className=" text-4xl  ml-2 text-black font-bold mb-2">Get In Touch</p>
<p className="mb-2 text-lg ml-2"> You can reach us anytime</p>
<div className=" flex flex-col  pr-10  w-full   gap-5   ">

<div className="flex flex-row justify-between gap-6">

<NormalInput 
placeholder="First name"
onChange={onChange}
Name="FirstName"


/>
<NormalInput  placeholder="Last Name"
onChange={onChange}
Name="LastName"
/>

</div>

<NormalInput  placeholder="Your email"
onChange={onChange}
Name="Email"

/>
<NormalInput  placeholder="Phone number"
onChange={onChange}
Name="PhoneNumber"


/>
<textarea
  className="rounded-lg p-3 m-8  w-full shadow-md  shadow-gray-100 outline-primary ring-1 ring-gray-300 text-md"
  name="Message"
  rows="4"
  cols="25"
  maxLength="120"
  onChange={(e) => {
    setCharCount(e.target.value.length);
    onChange(e);
  }}
/>
                  <div className="   text-end   -mr-8  -mt-10  ">
                    {charCount}/120</div>    
        
                    <button
                      disabled={!validateState(state)}
                      className={`min-w-[180px] ml-8 -mr-8 rounded-md  bg-[#ffa500] px-8 py-3 text-lg font-semibold text-white disabled:cursor-not-allowed disabled:bg-[#cecece] hover:bg-amber-400`}
                    >
                      Submit
                    </button>

</div>

            </form>
        </div>

  );
}


export default ContactPage;
