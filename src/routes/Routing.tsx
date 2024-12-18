import { routes } from "@/constant/routes";
import MaintenancePage from "@/pages/error/MaintenancePage";
import MissingPage from "@/pages/error/MissingPage";
import ServerErrorPage from "@/pages/error/ServerErrorPage";
import { Route, Routes } from "react-router-dom";

const Routing = () => {
  return (
    <Routes>
      {routes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}

      <Route path="*" element={<MissingPage />} />
      <Route path="/server-error" element={<ServerErrorPage />} />
      <Route path="/maintenance" element={<MaintenancePage />} />
    </Routes>
  );
};

export default Routing;
