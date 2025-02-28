import { AxiosRequestConfig, AxiosResponse } from "axios";
import { useRef, useState } from "react";
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
}
const useRequest = ({ showToast = true, loadingMessage }: Props = {}) => {
  // States
  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<number | undefined>(undefined);
  const [response, setResponse] = useState<any>(undefined);
  const [message, setMessage] = useState<any>(undefined);
  const [error, setError] = useState<boolean>(false);

  // Utils
  const abortControllerRef = useRef<AbortController | null>(null);
  const iss = useIsSmScreenWidth();

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
            setMessage(r?.data?.message);
            setLoading(false);
            if (onResolve?.onSuccess) {
              onResolve.onSuccess(r);
            }
          }

          resolve();
        })
        .catch((e) => {
          console.log(e);

          // Network Error
          if (e.code === "ERR_NETWORK") {
            console.log("Network Error");
            setMessage({
              title: "Jaringan Error",
              description:
                "Gagal terhubung ke server. Cobalah periksa jaringan Anda.",
            });
          }

          // Check if the error is due to request cancellation
          if (e.code !== "ERR_CANCELED") {
            // Set error if the request fails and is not canceled
            setError(true);
            setLoading(false);
          }

          if (onResolve?.onError) {
            onResolve.onError(e);
          }

          reject();

          setStatus(e.response?.status);
          setResponse(e.response);
          setMessage(e.response.message);
        })
        .finally(() => {});
    });

    showToast &&
      !error &&
      toaster.promise(promise, {
        loading: {
          title: loadingMessage?.title ?? "Loading...",
          description: loadingMessage?.description ?? "Harap Menunggu",
        },
        success: {
          title:
            typeof message?.title === "string"
              ? message?.title
              : "Title's format isn't string",
          description: message?.description
            ? typeof message?.description === "string"
            : "Description's format isn't string.",
          placement: iss ? "top" : "bottom-end",
          action: {
            label: "Close",
            onClick: () => {},
          },
        },
        error: {
          title:
            typeof message?.title === "string"
              ? message?.title
              : "Title's format isn't string",
          description: message?.description
            ? typeof message?.description === "string"
            : "Description's format isn't string.",

          placement: iss ? "top" : "bottom-end",
          action: {
            label: "Close",
            onClick: () => {},
          },
        },
      });
  }

  console.log(message);

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
