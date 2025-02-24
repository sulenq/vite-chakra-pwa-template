import { useEffect, useRef, useState } from "react";
import useRenderTrigger from "./useRenderTrigger";
import useRequest from "./useRequest";

interface Props<T> {
  initialData?: T;
  url?: string;
  payload?: any;
  dependencies?: any[];
  conditions?: boolean;
  noRt?: boolean;
  initialPage?: number;
  initialLimit?: number;
}

const useDataStateOld = <T>({
  initialData,
  payload,
  url,
  dependencies = [],
  conditions = true,
  noRt = false,
  initialPage = 1,
  initialLimit = 10,
}: Props<T>) => {
  // States
  const [loadingLoadMore, setLoadingLoadMore] = useState<boolean>(false);
  const [data, setData] = useState<T | undefined>(initialData);

  const [page, setPage] = useState(initialPage);
  const [limit, setLimit] = useState(initialLimit);
  const [paginationData, setPaginationData] = useState<any>(undefined);

  const { rt } = useRenderTrigger();

  const abortControllerRef = useRef<AbortController | null>(null);

  const { req, response, loading, error, status } = useRequest({
    showToast: false,
  });

  // useRef to store a stable reference to the request function
  const makeRequestRef = useRef<() => void>(() => {});

  // Define makeRequest inside useEffect but assign it to the ref
  useEffect(() => {
    makeRequestRef.current = () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
      const abortController = new AbortController();
      abortControllerRef.current = abortController;

      const method = payload ? "POST" : "GET";
      const data = {
        ...payload,
        limit: limit,
      };

      const config = {
        method,
        url: `${url}?page=${page}`,
        data: method === "POST" ? data : undefined,
        signal: abortController.signal,
      };

      setData(undefined);

      req({ config });
    };
  }, [payload, req, url, page, limit]);

  // Handle request via useEffect
  useEffect(() => {
    if (conditions && url) {
      makeRequestRef.current(); // Use the stable ref function
    }

    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [conditions, url, page, limit, ...(noRt ? [] : [rt]), ...dependencies]);

  // Handle response
  useEffect(() => {
    if (response) {
      setData(response?.data?.data);
      setPaginationData(response?.data?.pagination);
    }
  }, [response]);

  function retry() {
    makeRequestRef.current(); // Call the stable function
  }

  function loadMore() {
    setLoadingLoadMore(true);
    // TODO: Handle load more
  }

  const dataStates = {
    loading: loading,
    error: error,
    status: status,
    retry: retry,
    data: data,
    paginationData: paginationData,
  };
  const dataConfig = {
    page: page,
    setPage: setPage,
    limit: limit,
    setLimit: setLimit,
    paginationData: paginationData,
  };

  return {
    data,
    setData,
    loading,
    error,
    retry,
    loadMore,
    loadingLoadMore,
    setLoadingLoadMore,
    paginationData,
    dataStates,
    dataConfig,
  };
};

export default useDataStateOld;
