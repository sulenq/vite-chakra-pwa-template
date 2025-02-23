import { toaster } from "@/components/ui/toaster";
import useAuthMiddleware from "@/context/useAuthMiddleware";
import useRequest from "@/hooks/useRequest";
import { Center, Icon, Spinner } from "@chakra-ui/react";
import { IconShieldCheckFilled } from "@tabler/icons-react";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

interface Props {
  allowedPermissions?: number[];
  children: any;
  redirectTo?: string;
}

const AuthMiddleware = ({
  allowedPermissions = [],
  children,
  redirectTo = "/",
}: Props) => {
  // Context
  const { authToken, permissions, setPermissions, hasPermissions } =
    useAuthMiddleware();

  // Utils
  const { req, loading } = useRequest({ showToast: false });
  const navigate = useNavigate();

  // No auth token toast on 1st render
  useEffect(() => {
    if (!authToken || !hasPermissions(allowedPermissions)) {
      toaster.create({
        type: "error",
        title: "Tidak memiliki akses",
        description: "Silahkan login dengan akun anda",
        action: {
          label: "Close",
          onClick: () => {},
        },
      });
    }
  }, [authToken, permissions]);

  // Handle permissions
  useEffect(() => {
    function handleOnSuccess(r: any) {
      const permissions = r?.data?.data?.permission;
      if (Array.isArray(permissions)) {
        setPermissions(permissions);
      }
    }

    if (authToken) {
      if (!permissions) {
        const config = {
          url: `/rski/dashboard/user-info`,
        };
        req({
          config,
          onResolve: {
            onSuccess: handleOnSuccess,
            onError: () => {
              navigate(redirectTo);
            },
          },
        });
      }
    }
  }, []);

  return (
    <>
      {(loading || !permissions) && (
        <Center w={"100w"} minH={"100dvh"} color={"fg.subtle"}>
          <Center position={"relative"}>
            <Spinner position={"absolute"} w={"60px"} h={"60px"} />
            <Icon>
              <IconShieldCheckFilled size={32} />
            </Icon>
          </Center>
        </Center>
      )}

      {!loading && permissions && (
        <>
          {!authToken && <Navigate to={redirectTo} />}

          {authToken && (
            <>
              {hasPermissions(allowedPermissions) ? (
                children
              ) : (
                <Navigate to={redirectTo} />
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default AuthMiddleware;
