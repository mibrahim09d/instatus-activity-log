import { MOCK_DATA } from "@/constants/generic.constants";
import { useActivityLogContext } from "@/contexts/activity-log/activity-log.context";
import { useCallback } from "react";

export const useActivityLogHooks = () => {
  const { data, isLoading, setData, setIsLoading } = useActivityLogContext();

  const loadMoreData = useCallback(async () => {
    setIsLoading(true);
    // do api call..
    setTimeout(() => {
      setData((prevData) => [...prevData, ...MOCK_DATA]);
      setIsLoading(false);
    }, 200);
  }, []);

  const fetchResults = useCallback(async (searchTerm = "", page = 1) => {
    console.log("fetchResults searchTerm=", searchTerm, ", page=", page);
    setIsLoading(false);
  }, []);
  return { loadMoreData, fetchResults };
};
