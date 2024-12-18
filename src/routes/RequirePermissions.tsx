import { toaster } from "@/components/ui/toaster";
import useAuthMiddleware from "@/context/useAuthMiddleware";
import useRequest from "@/hooks/useRequest";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

interface Props {
  children: any;
  redirectTo?: string;
}

const RequirePermissions = ({ children, redirectTo = "/" }: Props) => {
  // Contexts
  const { permissions, setPermissions } = useAuthMiddleware();

  // States
  const [isAllowed, setIsAllowed] = useState<boolean>(false);

  // Utils
  const { req, loading } = useRequest({ showSuccessToast: false });

  // Handle get user data
  const handleOnSuccess = (r: any) => {
    const permissions = r?.data?.data?.permissions;
    if (permissions?.length > 0) {
      setIsAllowed(true);
    }

    setPermissions(permissions);
  };
  useEffect(() => {
    if (!permissions) {
      const config = {
        // TODO url get user data with permissions
        url: ``,
      };
      req({ config, onResolve: { onSuccess: handleOnSuccess } });
    }
  }, [permissions]);

  // Handle error toast
  useEffect(() => {
    if (!loading && permissions && !isAllowed) {
      toaster.create({
        type: "error",
        title: "Tidak memiliki izin",
        description: "Silakan hubungi admin jika Anda membutuhkan akses.",
        action: {
          label: "Close",
          onClick: () => {},
        },
      });
    }
  }, [permissions, isAllowed]);

  return (
    <>
      {loading && <p>Loading...</p>}

      {!loading && <>{isAllowed ? children : <Navigate to={redirectTo} />}</>}
    </>
  );
};

export default RequirePermissions;
