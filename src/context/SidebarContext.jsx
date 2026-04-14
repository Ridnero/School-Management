import { createContext, useState } from "react";

export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleFullScreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
        setIsFullScreen(true);
      } else {
        await document.exitFullscreen();
        setIsFullScreen(false);
      }
    } catch (error) {
      console.error("Fullscreen error:", error);
    }
  };

  return (
    <SidebarContext.Provider
      value={{
        isSidebarOpen,
        toggleSidebar,
        isFullScreen,
        toggleFullScreen,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
