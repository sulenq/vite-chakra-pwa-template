import { toaster } from "@/components/ui/toaster";
import getAuthToken from "@/utils/getAuthToken";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

interface Props {
  children: any;
  redirectTo?: string;
}

const RequireAuth = ({ children, redirectTo = "/" }: Props) => {
  const isAuthenticated = !!getAuthToken();

  useEffect(() => {
    if (!isAuthenticated) {
      toaster.create({
        type: "error",
        title: "Otorisasi dibutuhkan",
        description: "Silakan masuk dengan akun Anda.",
        action: {
          label: "Close",
          onClick: () => {},
        },
      });
    }
  }, [isAuthenticated]);

  return isAuthenticated ? children : <Navigate to={redirectTo} />;
};

export default RequireAuth;
