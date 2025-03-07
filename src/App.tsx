import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, useLocation } from "react-router-dom";
import "./App.css";
import { toaster, Toaster } from "./components/ui/toaster";
import Routing from "./routes/Routing";
import theme from "./theme";
import useStatusBarColor from "./utils/statusBarColor";
import { useEffect, useState } from "react";
import useOffline from "./context/useOffilne";
import OfflineDisclosure from "./components/widget/OfflineDisclosure";
import { back_online_toast } from "./locales/master";
import useLang from "./hooks/useLang";

const EndpointWrapper = ({ children }: { children: React.ReactNode }) => {
  // States, Refs
  const location = useLocation();

  // Utils
  const setStatusBarBody = useStatusBarColor("#ffffff", "#101010");
  const setStatusBarDark = useStatusBarColor("#101010", "#101010");

  // Handle notif bar color
  useEffect(() => {
    // Dapatkan endpoint dari lokasi saat ini
    const endpoint = location.pathname.split("/").pop();
    switch (endpoint) {
      default:
        setStatusBarBody();
        break;
      case "foto":
        setStatusBarDark();
        break;
    }
  }, [location]);

  return <>{children}</>;
};

function App() {
  // Context
  const { lang } = useLang();
  const { setOffline } = useOffline();

  // States, Refs
  const [firstLoad, setFirstLoad] = useState<boolean>(true);

  // Utils
  function handleOnline() {
    setOffline(false);
    if (!firstLoad) {
      toaster.success({
        title: back_online_toast.title[lang],
        description: back_online_toast.description[lang],
        action: {
          label: "Close",
          onClick: () => {},
        },
      });
    }
  }
  function handleOffline() {
    setOffline(true);
  }

  // Handle offline online
  useEffect(() => {
    // Tambahkan event listener
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [firstLoad]);

  // Hide online toast when first render
  useEffect(() => {
    if (firstLoad) {
      setFirstLoad(false);
    }
  }, [firstLoad]);

  return (
    <ChakraProvider value={theme}>
      <Toaster />
      <BrowserRouter>
        <OfflineDisclosure />

        <EndpointWrapper>
          <Routing />
        </EndpointWrapper>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
