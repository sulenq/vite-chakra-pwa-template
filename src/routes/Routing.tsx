import ClientNavContainer from "@/components/widget/ClientNavContainer";
import { PRIVATE_ROUTES, ROUTES } from "@/constant/routes";
import MaintenancePage from "@/pages/error/MaintenancePage";
import MissingPage from "@/pages/error/MissingPage";
import ServerErrorPage from "@/pages/error/ServerErrorPage";
import { Route, Routes } from "react-router-dom";
import AuthMiddleware from "./AuthMiddleware";

const Routing = () => {
  return (
    <Routes>
      {ROUTES.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}

      {PRIVATE_ROUTES.map(({ path, label, permissions, element }) => (
        <Route
          key={path}
          path={path}
          element={
            <AuthMiddleware allowedPermissions={permissions}>
              <ClientNavContainer activePath={path} label={label}>
                {element}
              </ClientNavContainer>
            </AuthMiddleware>
          }
        />
      ))}

      <Route path="*" element={<MissingPage />} />
      <Route path="/server-error" element={<ServerErrorPage />} />
      <Route path="/maintenance" element={<MaintenancePage />} />
    </Routes>
  );
};

export default Routing;
