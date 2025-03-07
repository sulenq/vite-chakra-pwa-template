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
import { useThemeConfig } from "./context/useThemeConfig";

const EndpointWrapper = ({ children }: { children: React.ReactNode }) => {
  // Context
  const { themeConfig } = useThemeConfig();

  // Utils
  const location = useLocation();
  const setStatusBarPrimary = useStatusBarColor(
    themeConfig.primaryColorHex,
    themeConfig.primaryColorHex
  );
  const setStatusBarBody = useStatusBarColor("#ffffff", "#101010");
  const setStatusBarDark = useStatusBarColor("#101010", "#101010");

  // Handle notif bar color
  useEffect(() => {
    // Dapatkan endpoint dari lokasi saat ini
    const endpoint = location.pathname;
    switch (endpoint) {
      default:
        setStatusBarBody();
        break;
      case "beranda":
        setStatusBarPrimary();
        break;
      case "employee/foto":
        setStatusBarDark();
        break;
    }
  }, [location, setStatusBarBody, setStatusBarDark]);

  return <>{children}</>;
};

function App() {
  // Context
  const { lang } = useLang();
  const { setOffline } = useOffline();

  // States, Refs
  const [firstRender, setFirstRender] = useState<boolean>(true);

  // Utils
  function handleOnline() {
    setOffline(false);
    if (!firstRender) {
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
  }, [firstRender]);

  // Hide online toast when first render
  useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
    }
  }, [firstRender]);

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
