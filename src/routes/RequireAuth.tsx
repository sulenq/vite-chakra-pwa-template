import { toaster } from "@/components/ui/toaster";
import getAuthToken from "@/utils/getAuthToken";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

interface Props {
  children: any;
  redirectTo?: string;
  requireAuth?: boolean;
}

const RequireAuth = ({
  children,
  redirectTo = "/",
  requireAuth = false,
}: Props) => {
  const isAuthenticated = !!getAuthToken();

  useEffect(() => {
    if (!isAuthenticated) {
      toaster.create({
        type: "error",
        title: "Authorization required",
        description: "Please login with your account.",
        action: {
          label: "Close",
          onClick: () => {},
        },
      });
    }
  }, [isAuthenticated]);

  if (requireAuth)
    return isAuthenticated ? children : <Navigate to={redirectTo} />;

  return children;
};

export default RequireAuth;
