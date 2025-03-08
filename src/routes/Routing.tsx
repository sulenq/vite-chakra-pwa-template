import NavsContainer from "@/components/widget/NavsContainer";
import { PRIVATE_ROUTES, ROUTES } from "@/constant/routes";
import MaintenancePage from "@/pages/error/MaintenancePage";
import MissingPage from "@/pages/error/MissingPage";
import ServerErrorPage from "@/pages/error/ServerErrorPage";
import { Route, Routes } from "react-router-dom";
import AuthMiddleware from "./AuthMiddleware";
import useLang from "@/context/useLang";
import pluck from "@/utils/pluck";

const Routing = () => {
  // Context
  const { l } = useLang();

  return (
    <Routes>
      {ROUTES.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}

      {PRIVATE_ROUTES.map(
        ({ path, activePath, backPath, titleKey, permissions, element }) => (
          <Route
            key={path}
            path={path}
            element={
              <AuthMiddleware allowedPermissions={permissions}>
                <NavsContainer
                  activePath={activePath}
                  title={pluck(l, titleKey)}
                  backPath={backPath}
                >
                  {element}
                </NavsContainer>
              </AuthMiddleware>
            }
          />
        )
      )}

      <Route path="*" element={<MissingPage />} />
      <Route path="/server-error" element={<ServerErrorPage />} />
      <Route path="/maintenance" element={<MaintenancePage />} />
    </Routes>
  );
};

export default Routing;
