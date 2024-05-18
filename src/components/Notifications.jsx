import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { BlockLoader } from "./Loader";
function Notifications() {
  const [isLoading, setIsLoading] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [notifying, setNotifying] = useState(true);
  const trigger = useRef(null);
  const dropdown = useRef(null);
  const userData = JSON.parse(localStorage.getItem("userData"));

  useEffect(() => {
    const clickHandler = (e) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(e.target) ||
        trigger.current.contains(e.target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, [dropdownOpen]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_LINK}/api/notification/${userData._id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          },
        );
        if (response.ok) {
          const data = await response.json();
          setNotifications(data.data.notification);
          setNotifying(
            data.data.notification.some(
              (notification) => notification.isRead === false,
            ),
          );
        }
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [userData._id]);

  const handleReadNotification = async (notificationId) => {
    if (
      notifications.find((notification) => notification._id === notificationId)
        .isRead
    )
      return;
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_LINK}/api/notification`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({ notificationId }),
        },
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        if (data.status === "success") {
          setNotifications((notifications) =>
            notifications.map((notification) =>
              notification._id === notificationId
                ? { ...notification, isRead: true }
                : notification,
            ),
          );
        }
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="relative z-40 flex items-center justify-center">
      <Link
        ref={trigger}
        onClick={() => {
          setNotifying(false);
          setDropdownOpen(!dropdownOpen);
        }}
        to="#"
        className="relative flex h-8 w-8 items-center justify-center dark:text-primary"
      >
        <span
          className={`z-1 absolute -top-0.5 right-0 h-2 w-2 rounded-full bg-red-500 ${
            notifying === false ? "hidden" : "inline"
          }`}
        >
          <span className="-z-1 absolute inline-flex h-full w-full animate-ping rounded-full bg-red-200 opacity-75"></span>
        </span>

        <svg
          className="fill-current duration-300 ease-in-out"
          width="25"
          height="25"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.1999 14.9343L15.6374 14.0624C15.5249 13.8937 15.4687 13.7249 15.4687 13.528V7.67803C15.4687 6.01865 14.7655 4.47178 13.4718 3.31865C12.4312 2.39053 11.0812 1.7999 9.64678 1.6874V1.1249C9.64678 0.787402 9.36553 0.478027 8.9999 0.478027C8.6624 0.478027 8.35303 0.759277 8.35303 1.1249V1.65928C8.29678 1.65928 8.24053 1.65928 8.18428 1.6874C4.92178 2.05303 2.4749 4.66865 2.4749 7.79053V13.528C2.44678 13.8093 2.39053 13.9499 2.33428 14.0343L1.7999 14.9343C1.63115 15.2155 1.63115 15.553 1.7999 15.8343C1.96865 16.0874 2.2499 16.2562 2.55928 16.2562H8.38115V16.8749C8.38115 17.2124 8.6624 17.5218 9.02803 17.5218C9.36553 17.5218 9.6749 17.2405 9.6749 16.8749V16.2562H15.4687C15.778 16.2562 16.0593 16.0874 16.228 15.8343C16.3968 15.553 16.3968 15.2155 16.1999 14.9343ZM3.23428 14.9905L3.43115 14.653C3.5999 14.3718 3.68428 14.0343 3.74053 13.6405V7.79053C3.74053 5.31553 5.70928 3.23428 8.3249 2.95303C9.92803 2.78428 11.503 3.2624 12.6562 4.2749C13.6687 5.1749 14.2312 6.38428 14.2312 7.67803V13.528C14.2312 13.9499 14.3437 14.3437 14.5968 14.7374L14.7655 14.9905H3.23428Z"
            fill=""
          />
        </svg>
      </Link>
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`z-99 absolute -right-14 top-10 mt-2.5 flex w-80 flex-col rounded-sm border border-neutral-300 bg-white sm:right-0 sm:w-80 ${
          dropdownOpen === true ? "block" : "hidden"
        }`}
      >
        <div className="px-4 py-3">
          <h5 className="text-sm font-medium text-neutral-700">
            Notifications
          </h5>
        </div>
        <ul className="flex h-auto flex-col overflow-y-auto">
          {isLoading ? (
            <li className="h-24 w-full text-center">
              <span className="relative -right-32 top-8 block h-8 w-1/6">
                <BlockLoader />
              </span>
            </li>
          ) : notifications.length === 0 ? (
            <li className="w-full py-4 text-center text-base font-normal text-neutral-600">
              No notifications
            </li>
          ) : (
            notifications.map((notification) => (
              <li
                key={notification._id}
                onClick={() => handleReadNotification(notification._id)}
                className={` ${notification.isRead ? "" : "cursor-pointer"} relative gap-2.5 border-t border-neutral-300 px-4 py-3 hover:bg-neutral-50`}
              >
                <p className="text-sm">
                  <span
                    className={`${notification.isRead ? "text-neutral-500" : "text-neutral-800"} font-medium `}
                  >
                    {notification.title}:
                  </span>
                  &nbsp;
                  <span
                    className={`${notification.isRead ? "text-neutral-400" : "text-neutral-600"}`}
                  >
                    {notification.message}
                  </span>
                </p>
                <span>
                  <span
                    className={`${
                      notification.isRead ? "hidden" : "block"
                    } absolute right-1 top-[42%] h-3 w-3 rounded-full bg-primary`}
                  ></span>
                </span>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default Notifications;
