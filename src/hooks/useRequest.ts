import useLang from "@/context/useLang";
import { AxiosRequestConfig, AxiosResponse } from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toaster } from "../components/ui/toaster";
import request from "../utils/request";

interface Interface__Req {
  config: AxiosRequestConfig;
  onResolve?: {
    onSuccess?: (r: AxiosResponse<any, any>) => void;
    onError?: (r: any) => void;
  };
}

interface Props {
  id: string;
  showLoadingToast?: boolean;
  showSuccessToast?: boolean;
  showErrorToast?: boolean;
  loadingMessage?: {
    title?: string;
    description?: string;
  };
  successMessage?: {
    title?: string;
    description?: string;
  };
  errorMessage?: Record<number, { title: string; description: string }>;
  loginPath?: string;
}
const useRequest = ({
  id,
  showLoadingToast = true,
  showSuccessToast = true,
  showErrorToast = true,
  loadingMessage,
  successMessage,
  errorMessage,
  loginPath = "/",
}: Props) => {
  // Contexts
  const { l } = useLang();

  // States, Refs
  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<number | undefined>(undefined);
  const [response, setResponse] = useState<any>(undefined);
  const [error, setError] = useState<boolean>(false);
  const fLoadingMessage = {
    title: loadingMessage?.title || l.default_request_loading_toast.title,
    description:
      loadingMessage?.description ||
      l.default_request_loading_toast.description,
  };
  const fSuccessMessage = {
    title: successMessage?.title || l.default_request_success_toast.title,
    description:
      successMessage?.description ||
      l.default_request_success_toast.description,
  };

  // Utils
  const abortControllerRef = useRef<AbortController | null>(null);
  const navigate = useNavigate();

  // Make request func
  function req({ config, onResolve }: Interface__Req) {
    if (!loading) setLoading(true);
    if (error) setError(false);
    if (status) setStatus(undefined);

    // Add api base url
    config.url = `${import.meta.env.VITE_API_BASE_URL}${config.url}`;

    // Abort request
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    const abortController = new AbortController();
    abortControllerRef.current = abortController;

    // Start request
    request(config)
      .then((r) => {
        setStatus(r.status);
        if (r.status === 200 || r.status === 201) {
          setResponse(r);
          setLoading(false);
          if (onResolve?.onSuccess) {
            onResolve.onSuccess(r);
          }
        }

        showSuccessToast &&
          toaster.update(id, {
            type: "success",
            title: fSuccessMessage.title,
            description: fSuccessMessage.description,
            action: {
              label: "Close",
              onClick: () => {},
            },
          });
      })
      .catch((e) => {
        console.log(e);

        switch (e.code) {
          case "ERR_CANCELED":
            setError(true);
            setLoading(false);
            break;
        }

        switch (e.status) {
          case 401:
          case 403:
            // call logout func
            navigate(loginPath);
            break;
          case 500:
            navigate("/server-error");
            break;
          case 503:
            navigate("/maintenance");
            break;
        }

        const errorToast = () => {
          if (errorMessage && errorMessage[e.status]) {
            return errorMessage[e.status];
          }

          if (e.code === "ERR_NETWORK") {
            return l.error_network_toast;
          } else if (e.status === 401) {
            return {
              title: l.error_401_toast.title,
              description: l.error_401_toast.description,
            };
          } else if (e.status === 403) {
            return {
              title: l.error_403_toast.title,
              description: l.error_403_toast.description,
            };
          } else {
            return {
              title: l.default_request_error_toast.title,
              description: l.default_request_error_toast.description,
            };
          }
        };

        showErrorToast &&
          showLoadingToast &&
          toaster.update(id, {
            type: "error",
            ...errorToast(),
            action: {
              label: "Close",
              onClick: () => {},
            },
          });

        showErrorToast &&
          !showLoadingToast &&
          toaster.error({
            ...errorToast(),
            action: {
              label: "Close",
              onClick: () => {},
            },
          });

        onResolve?.onError?.(e);

        setStatus(e.response?.status);
        setResponse(e.response);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    if (loading && showLoadingToast) {
      toaster.loading({
        id: id,
        title: fLoadingMessage.title,
        description: fLoadingMessage.description,
      });
    }
  }, [loading]);

  return {
    req,
    loading,
    setLoading,
    status,
    setStatus,
    response,
    setResponse,
    error,
    setError,
  };
};

export default useRequest;
