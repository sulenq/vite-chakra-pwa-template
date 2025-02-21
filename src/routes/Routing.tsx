import NavContainer from "@/components/widget/NavContainer";
import { PRIVATE_ROUTES, ROUTES } from "@/constant/routes";
import MaintenancePage from "@/pages/error/MaintenancePage";
import MissingPage from "@/pages/error/MissingPage";
import ServerErrorPage from "@/pages/error/ServerErrorPage";
import { Route, Routes } from "react-router-dom";

const Routing = () => {
  return (
    <Routes>
      {ROUTES.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}

      {PRIVATE_ROUTES.map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={<NavContainer activePath={path}>{element}</NavContainer>}
        />
      ))}

      <Route path="*" element={<MissingPage />} />
      <Route path="/server-error" element={<ServerErrorPage />} />
      <Route path="/maintenance" element={<MaintenancePage />} />
    </Routes>
  );
};

export default Routing;
