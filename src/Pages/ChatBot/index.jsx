import { useState } from "react";
import { Outlet } from "react-router-dom";
import ChatInput from "./ChatInput";
import Sidebar from "./Sidebar";
import Header from "./Header";

const ChatBot = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <div className="flex min-h-screen overflow-hidden lg:ml-72">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <ChatInput />
        <div className="relative flex min-h-screen max-w-screen-2xl flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main className="relative flex h-full flex-1 p-4 md:p-6 2xl:p-10">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};
export default ChatBot;
