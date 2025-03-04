import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, useLocation } from "react-router-dom";
import "./App.css";
import { toaster, Toaster } from "./components/ui/toaster";
import Routing from "./routes/Routing";
import theme from "./theme";
import useStatusBarColor from "./utils/statusBarColor";
import { useEffect, useState } from "react";

// Styling notif bar color
const EndpointWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const setStatusBarBody = useStatusBarColor("#ffffff", "#101010");
  const setStatusBarDark = useStatusBarColor("#101010", "#101010");

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
  const [firstLoad, setFirstLoad] = useState<boolean>(true);

  useEffect(() => {
    const handleOnline = () => {
      if (!firstLoad) {
        toaster.success({
          title: "Koneksi Pulih",
          description: "Anda kembali online.",
          action: {
            label: "Close",
            onClick: () => {},
          },
        });
      }
    };

    const handleOffline = () => {
      toaster.error({
        title: "Jaringan Terputus",
        description: "Anda sedang offline.",
        action: {
          label: "Close",
          onClick: () => {},
        },
      });
    };

    // Tambahkan event listener
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Cleanup event listener saat komponen di-unmount
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [firstLoad]);

  // Hindari toast pertama kali
  useEffect(() => {
    if (firstLoad) {
      setFirstLoad(false);
    }
  }, [firstLoad]);

  return (
    <ChakraProvider value={theme}>
      <Toaster />
      <BrowserRouter>
        <EndpointWrapper>
          <Routing />
        </EndpointWrapper>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
