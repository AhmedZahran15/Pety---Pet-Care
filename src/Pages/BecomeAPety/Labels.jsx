function Labels({LabelText,Fieldinput,SetFieldInput}) {
  return (
    <div className="mt-10 ml-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
    <div className="sm:col-span-4">
      <label className="block text-sm font-medium leading-6 text-gray-900">
    {LabelText}
      </label>
      <div className="mt-2 ">
        <div className="  flex rounded-md  shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-md">
          <input
            type="text"
 
            value={Fieldinput}
            onChange={(e) => {
              SetFieldInput(e.target.value);
            }}
            className="block flex-1 border-0   outline-primary bg-transparent py-3 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder=""
          />
        </div>
      </div>
    </div>

</div>
  )
}

export default Labels
