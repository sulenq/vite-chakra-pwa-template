import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Toaster } from "./components/ui/toaster";
import Routing from "./routes/Routing";
import theme from "./theme";

function App() {
  return (
    <ChakraProvider value={theme}>
      <Toaster />
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
