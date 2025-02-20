import { AxiosRequestConfig, AxiosResponse } from "axios";
import { useEffect, useRef, useState } from "react";
import request from "../utils/request";
import { toaster } from "../components/ui/toaster";
import useIsSmScreenWidth from "./useIsSmScreenWidth";

interface Props {
  showSuccessToast?: boolean;
  showErrorToast?: boolean;
}

interface Interface__Req {
  config: AxiosRequestConfig;
  onResolve?: {
    onSuccess?: (r: AxiosResponse<any, any>) => void;
    onError?: (r: any) => void;
  };
}

const useRequest = ({
  showSuccessToast = true,
  showErrorToast = true,
}: Props = {}) => {
  // States
  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<number | undefined>(undefined);
  const [response, setResponse] = useState<any>(undefined);
  const [error, setError] = useState<boolean>(false);

  // Utils
  const abortControllerRef = useRef<AbortController | null>(null);
  const iss = useIsSmScreenWidth();

  // Make request func
  function req({ config, onResolve }: Interface__Req) {
    setLoading(true);
    setError(false);
    setStatus(undefined);

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
      })
      .catch((e) => {
        console.log(e);

        setStatus(e.response?.status);
        setResponse(e.response);

        // Network Error
        if (e.code === "ERR_NETWORK") {
          toaster.error({
            title: "Network error",
            description:
              "Gagal terhubung ke server. Cobalah periksa jaringan Anda.",
            // duration: 3000,
            action: {
              label: "Close",
              onClick: () => {},
            },
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
      })
      .finally(() => {});
  }

  // Handle toast by response status
  useEffect(() => {
    if (!loading && status) {
      switch (status) {
        case 200:
        case 201:
          showSuccessToast &&
            toaster.create({
              type: "success",
              title:
                typeof response?.data?.message?.title === "string"
                  ? response?.data?.message?.title
                  : "Title's format isn't string",
              description: response?.data?.message?.description
                ? typeof response?.data?.message?.description === "string"
                : "Description's format isn't string",
              // ? response?.data?.message
              // : "Format pesan response bukan string"
              // duration: 3000,
              placement: iss ? "top" : "bottom-end",
              action: {
                label: "Close",
                onClick: () => {},
              },
            });
          break;
        case 400:
        case 401:
        case 403:
        case 404:
        case 500:
          showErrorToast &&
            toaster.create({
              type: "error",
              title:
                typeof response?.data?.message?.title === "string"
                  ? response?.data?.message?.title
                  : "Format judul salah",
              description: response?.data?.message?.description
                ? typeof response?.data?.message?.description === "string"
                : "Format deskripsi salah",
              // ? response?.data?.message
              // : "Format pesan response bukan string"
              // duration: 3000,

              placement: iss ? "top" : "bottom-end",
              action: {
                label: "Close",
                onClick: () => {},
              },
            });
          break;
      }
    }
  }, [
    loading,
    status,
    response?.data?.message,
    showSuccessToast,
    showErrorToast,
  ]);

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
