import { API } from "@/common/api";
import { MAX_PAGE_SIZE } from "@/constants/generic.constants";
import { useActivityLogContext } from "@/contexts/activity-log/activity-log.context";
import { useCallback } from "react";

export const useActivityLogHooks = () => {
  const { setPage, data, setData, setIsLoading } = useActivityLogContext();

  const fetchResults = useCallback(
    async (searchPage: number, searchTerm = "") => {
      setIsLoading(true);
      try {
        const { data: result } = await API.get(
          encodeURI(
            `/events?page=${searchPage}&pageSize=${MAX_PAGE_SIZE}&filter=${searchTerm}`
          )
        );

        if (result.length > 0) {
          setPage(searchPage + 1);
        }

        if (searchPage === 1) {
          setData(result);
        } else {
          setData([...data, ...result]);
        }
      } catch {
        console.log("Failed to fetch!");
      } finally {
        setIsLoading(false);
      }
    },
    [data]
  );

  return { fetchResults };
};
