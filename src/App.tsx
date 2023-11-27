import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function App() {
  const [showSidebar, setShowSidebar] = useState(true);
  return (
    <>
      <div className="flex">
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <div className={"w-full"}>
          <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
