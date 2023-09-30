import { ReactNode, useState } from "react";
import {
  ActivityLogContext,
  ActivityLogContextType,
} from "./activity-log.context";
import { ActivityLogDataType } from "@/types/activity-log-data.type";

interface ActivityLogProviderProps {
  children: ReactNode;
}

export const ActivityLogProvider: React.FC<ActivityLogProviderProps> = ({
  children,
}) => {
  const [data, setData] = useState<ActivityLogDataType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  const contextValue: ActivityLogContextType = {
    data,
    isLoading,
    page,
    setData,
    setIsLoading,
    setPage,
  };

  return (
    <ActivityLogContext.Provider value={contextValue}>
      {children}
    </ActivityLogContext.Provider>
  );
};
