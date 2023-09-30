import { API } from "@/common/api";
import { MAX_PAGE_SIZE } from "@/constants/generic.constants";
import { useActivityLogContext } from "@/contexts/activity-log/activity-log.context";
import { debug } from "console";
import { useCallback } from "react";

export const useActivityLogHooks = () => {
  const { page, setPage, data, setData, setIsLoading } =
    useActivityLogContext();

  const fetchResults = useCallback(async (searchTerm = "") => {
    setIsLoading(true);
    try {
      const { data: result } = await API.get(
        encodeURI(`/events?page=${page}&pageSize=${MAX_PAGE_SIZE}`)
      );

      if (result?.length > 0) {
        setPage(page + 1);
      }
      setData([...data, ...result]);
    } catch {
      console.log("Failed to fetch!");
    } finally {
      setIsLoading(false);
    }
  }, [page]);

  return { fetchResults };
};
