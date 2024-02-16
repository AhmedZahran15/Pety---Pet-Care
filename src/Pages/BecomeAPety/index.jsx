import { Outlet } from "react-router-dom";
import FormContext from "../../contexts/FormContext";
import { FormProvider } from "../../contexts/FormContext";
function BecomeAPety() {
  return (
    <FormProvider>
    <div className="h-full w-full bg-neutral-100">
      <Outlet />
    </div>
    </FormProvider>
  );
}

export default BecomeAPety;
