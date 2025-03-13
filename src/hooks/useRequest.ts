import useLang from "@/context/useLang";
import { AxiosRequestConfig, AxiosResponse } from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toaster } from "../components/ui/toaster";
import request from "../utils/request";
import useIsSmScreenWidth from "./useIsSmScreenWidth";

interface Interface__Req {
  config: AxiosRequestConfig;
  onResolve?: {
    onSuccess?: (r: AxiosResponse<any, any>) => void;
    onError?: (r: any) => void;
  };
}

interface Props {
  showToast?: boolean;
  loadingMessage?: {
    title?: string;
    description?: string;
  };
  successMessage?: {
    title: string;
    description: string;
  };
  loginPath?: string;
}
const useRequest = ({
  showToast = true,
  loadingMessage,
  successMessage,
  loginPath = "/",
}: Props = {}) => {
  // Contexts
  const { l } = useLang();

  // States, Refs
  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<number | undefined>(undefined);
  const [response, setResponse] = useState<any>(undefined);
  const [error, setError] = useState<boolean>(false);
  const loadingMsg = loadingMessage || {
    title: l.default_request_loading_message.title,
    description: l.default_request_loading_message.description,
  };
  const successMsg = successMessage || {
    title: l.default_request_success_message.title,
    description: l.default_request_success_message.description,
  };
  // const [message, setMessage] = useState<any>(undefined);

  // Utils
  const abortControllerRef = useRef<AbortController | null>(null);
  const iss = useIsSmScreenWidth();
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
    const promise = new Promise<void>((resolve, reject) => {
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

          resolve();
        })
        .catch((e) => {
          console.log(e);

          switch (e.code) {
            default:
              if (!showToast) {
                toaster.error({
                  title: "Default error title",
                  description: "Default error description",
                });
              }
              break;
            case "ERR_NETWORK":
              if (!showToast) {
                toaster.error({
                  title: "Jaringan Error",
                  description:
                    "Gagal terhubung ke server. Cobalah periksa jaringan Anda.",
                });
              }
              break;
            case "ERR_CANCELED":
              setError(true);
              setLoading(false);
              break;
          }

          switch (e.status) {
            default:
              break;
            case 401:
              navigate(loginPath);
              break;
            case 500:
              navigate("/server-error");
              break;
            case 503:
              navigate("/maintenance");
              break;
          }

          if (onResolve?.onError) {
            onResolve.onError(e);
          }

          reject();

          setStatus(e.response?.status);
          setResponse(e.response);
        })
        .finally(() => {});
    });

    showToast &&
      toaster.promise(promise, {
        loading: {
          title: loadingMessage?.title ?? "Loading...",
          description: loadingMessage?.description ?? "Harap Menunggu",
        },
        success: {
          title: successMsg.title,
          description: successMsg.description,
          placement: iss ? "top" : "bottom-end",
          action: {
            label: "Close",
            onClick: () => {},
          },
        },
        error: {
          title: loadingMsg.title,
          description: loadingMsg.description,
          placement: iss ? "top" : "bottom-end",
          action: {
            label: "Close",
            onClick: () => {},
          },
        },
      });
  }

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
