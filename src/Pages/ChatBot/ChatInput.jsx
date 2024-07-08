import { useState, useEffect, useRef } from "react";
import ThreeDots from "./ThreeDots";
import toast from "react-hot-toast";

function ChatInput() {
  const [startMessage, setStartMessage] = useState("");
  const [startMessageIsLoading, setStartMessageIsLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const userData = JSON.parse(localStorage.getItem("userData"));
  const messagesEndRef = useRef(null);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setStartMessage(
        "Hi there! I'm PetBot, and I'm happy to answer any questions you have about your furry friend.",
      );
      setStartMessageIsLoading(false);
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, []);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "instant" });
  }, [chatHistory]);
  const getResponse = async () => {
    try {
      const message = value.trim();
      if (message === "") {
        toast.error("Please enter a message");
        setValue("");
        return;
      }
      setIsLoading(true);
      setChatHistory((prev) => [...prev, message]);
      setValue("");
      const response = await fetch(`${import.meta.env.VITE_CHATAPI_LINK}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...chatHistory, message],
        }),
      });
      const data = await response.json();
      setChatHistory((prev) => [...prev, data.response]);
    } catch (error) {
      toast.error("There was an error fetching the data.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex  min-h-[calc(100vh-70px)] w-full flex-1 flex-col gap-y-4 p-4 md:p-6 2xl:p-10">
      <div className="flex w-full flex-1 flex-col justify-end gap-y-2 overflow-y-auto ">
        {!startMessageIsLoading && (
          <div className="flex w-5/6 flex-col items-start gap-2 text-start">
            <div className="flex flex-row items-center gap-x-2">
              <span className="rounded-full bg-neutral-200 p-1">
                <img
                  className="box-border h-9 w-9 rounded-full"
                  src="/images/homepage/chatBot.png"
                  alt="PetBot"
                />
              </span>
              <span className="font-Montserrat text-base font-semibold">
                PetBot
              </span>
            </div>
            <p className="rounded-xl bg-blue-50 p-2 px-3 font-Montserrat text-base font-medium shadow-md shadow-neutral-200">
              {startMessage}
            </p>
          </div>
        )}
        {chatHistory.map((chatItem, _index) => (
          <div
            className={`flex w-5/6 flex-col gap-2 ${
              _index % 2 === 0
                ? "items-end self-end text-end"
                : "items-start text-start"
            }`}
            key={_index}
          >
            <div className="flex flex-row items-center gap-x-2">
              <span
                className={`${_index % 2 === 0 ? "mr-1 scale-[1.2]" : " bg-neutral-200 p-1"} rounded-full`}
              >
                <img
                  className="box-border h-9 w-9 rounded-full"
                  src={
                    _index % 2 === 0
                      ? userData?.photo?.url || "/userImage.png"
                      : "/images/homepage/chatBot.png"
                  }
                  alt={_index % 2 === 0 ? "user" : "PetBot"}
                />
              </span>
              <span className="font-Montserrat text-base font-semibold">
                {_index % 2 === 0 ? `You` : `PetBot`}
              </span>
            </div>
            <p
              ref={_index === chatHistory.length - 1 ? messagesEndRef : null}
              className={`${_index % 2 === 0 ? " bg-primary text-white" : "bg-blue-50"} rounded-xl p-2 px-3 font-Montserrat text-base font-medium shadow-md shadow-neutral-200`}
            >
              {chatItem}
            </p>
          </div>
        ))}
        {(isLoading || startMessageIsLoading) && <ThreeDots />}
      </div>
      <div className="relative mt-auto">
        <textarea
          value={value}
          onKeyDown={(e) => {
            if (
              e.key === "Enter" &&
              value.trim() !== "" &&
              !e.shiftKey &&
              !isLoading
            ) {
              getResponse(e);
            }
          }}
          rows={3}
          className="max-h-[25dvh] w-full rounded-lg border border-neutral-400 px-4 py-3 font-Montserrat font-medium shadow-md shadow-neutral-300 outline-none no-scrollbar placeholder:font-medium placeholder:text-neutral-400 focus:border-primary focus:ring-1 focus:ring-primary"
          onChange={(e) => {
            if (isLoading) return;
            setValue(e.target.value);
          }}
          placeholder="Type your message here..."
        />
        <button
          className="absolute right-4 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary font-Montserrat font-medium text-white shadow-md shadow-neutral-300 disabled:bg-secondary"
          onClick={getResponse}
          disabled={isLoading}
        >
          <svg
            x="0px"
            fill="#fff"
            y="0px"
            className="h-7 w-7 -rotate-90"
            viewBox="0 0 492.004 492.004"
            xmlSpace="preserve"
          >
            <path d="M484.14 226.886L306.46 49.202c-5.072-5.072-11.832-7.856-19.04-7.856-7.216 0-13.972 2.788-19.044 7.856l-16.132 16.136c-5.068 5.064-7.86 11.828-7.86 19.04 0 7.208 2.792 14.2 7.86 19.264L355.9 207.526H26.58C11.732 207.526 0 219.15 0 234.002v22.812c0 14.852 11.732 27.648 26.58 27.648h330.496L252.248 388.926c-5.068 5.072-7.86 11.652-7.86 18.864 0 7.204 2.792 13.88 7.86 18.948l16.132 16.084c5.072 5.072 11.828 7.836 19.044 7.836 7.208 0 13.968-2.8 19.04-7.872l177.68-177.68c5.084-5.088 7.88-11.88 7.86-19.1.016-7.244-2.776-14.04-7.864-19.12z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default ChatInput;
