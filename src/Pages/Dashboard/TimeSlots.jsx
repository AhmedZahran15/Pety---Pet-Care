import { useEffect, useReducer, useState } from "react";
import { useLocation } from "react-router-dom";
import { BlockLoader } from "../../components/Loader";
import Breadcrumb from "./Breadcrumb";
import TimeSlot from "./TimeSlot";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";
import toast from "react-hot-toast";

const initialTimeSlots = {
  availability: [
    {
      available: false,
      day: "saturday",
      startTime: "10:00 AM",
      endTime: "12:00 PM",
      sessionDuration: "00:30",
    },
    {
      available: false,
      day: "sunday",
      startTime: "10:00 AM",
      endTime: "12:00 PM",
      sessionDuration: "00:30",
    },
    {
      available: false,
      day: "monday",
      startTime: "10:00 AM",
      endTime: "12:00 PM",
      sessionDuration: "00:30",
    },
    {
      available: false,
      day: "tuesday",
      startTime: "10:00 AM",
      endTime: "12:00 PM",
      sessionDuration: "00:30",
    },
    {
      available: false,
      day: "wednesday",
      startTime: "10:00 AM",
      endTime: "12:00 PM",
      sessionDuration: "00:30",
    },
    {
      available: false,
      day: "thursday",
      startTime: "10:00 AM",
      endTime: "12:00 PM",
      sessionDuration: "00:30",
    },
    {
      available: false,
      day: "friday",
      startTime: "10:00 AM",
      endTime: "12:00 PM",
      sessionDuration: "00:30",
    },
  ],
};
function reducer(state, action) {
  switch (action.type) {
    case "UPDATE/VALUE":
      return {
        availability: state.availability.map((item) =>
          item.day === action.payload.day
            ? action.payload.key === "startTime" &&
              moment(item.endTime, "hh:mm A").isBefore(
                moment(action.payload.value, "hh:mm A"),
              )
              ? {
                  ...item,
                  [action.payload.key]: action.payload.value,
                  startTime: action.payload.value,
                  endTime: moment(action.payload.value, "hh:mm A")
                    .add(15, "minutes")
                    .format("hh:mm A"),
                }
              : {
                  ...item,
                  [action.payload.key]: action.payload.value,
                }
            : item,
        ),
      };
    case "UPDATE/DAY":
      return {
        availability: state.availability.map((item) =>
          item.day === action.payload.day
            ? {
                ...item,
                available: action.payload.available,
                startTime: action.payload.startTime,
                endTime: action.payload.endTime,
                sessionDuration: action.payload.sessionDuration,
              }
            : item,
        ),
      };
    case "UPDATE/ALL":
      return {
        availability: state.availability.map((item) => ({
          ...item,
          available: action.payload.available,
          startTime: action.payload.startTime,
          endTime: action.payload.endTime,
          sessionDuration: action.payload.sessionDuration,
        })),
      };
    default:
      return state;
  }
}
function TimeSlots() {
  const [timeSlots, dispatch] = useReducer(reducer, initialTimeSlots);
  const [isLoading, setIsLoading] = useState(false);
  const { pathname } = useLocation();
  const role = pathname.split("/")[2];

  useEffect(() => {
    const fetchTimeSlots = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `${import.meta.env.VITE_API_LINK}/api/dashboard/workingHours`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify({ role }),
          },
        );
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const data = await response.json();
        for (const item of data.data) {
          dispatch({
            type: "UPDATE/DAY",
            payload: {
              day: item.day,
              available: true,
              startTime: item.startTime,
              endTime: item.endTime,
              sessionDuration: item.sessionDuration,
            },
          });
        }
      } catch (error) {
        toast.error("Something went wrong");
      } finally {
        setIsLoading(false);
      }
    };
    fetchTimeSlots();
  }, [role]);

  const handleSubmit = async () => {
    const data = {
      role,
      availability: timeSlots.availability.filter((item) => item.available),
    };
    try {
      setIsLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_API_LINK}/api/dashboard/timeTable`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(data),
        },
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const resData = await response.json();
      if (resData.status === "success")
        toast.success("Time slots updated successfully");
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      {isLoading ? (
        <BlockLoader />
      ) : (
        <div className="relative mx-auto w-full">
          <Breadcrumb pageName={"Time Slots"} />
          <div className="grid grid-flow-row-dense grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
            <LocalizationProvider dateAdapter={AdapterMoment}>
              {timeSlots.availability.map((item) => (
                <TimeSlot
                  key={item.day}
                  day={item.day}
                  available={item.available}
                  startTime={item.startTime}
                  endTime={item.endTime}
                  sessionDuration={item.sessionDuration}
                  dispatch={dispatch}
                />
              ))}
            </LocalizationProvider>
            <button
              onClick={handleSubmit}
              className="rounded bg-[#268385] px-4 py-2 text-xl font-medium text-neutral-50 hover:bg-primary"
            >
              Save changes to time slots
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default TimeSlots;
