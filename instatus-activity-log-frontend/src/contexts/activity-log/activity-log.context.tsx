import { ActivityLogDataType } from "@/types/activity-log-data.type";
import React, { createContext, useContext, useState, ReactNode } from "react";

export interface ActivityLogContextType {
  page: number;
  data: ActivityLogDataType[];
  isLoading: boolean;
  setData: React.Dispatch<React.SetStateAction<ActivityLogDataType[]>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export const ActivityLogContext = createContext<
  ActivityLogContextType | undefined
>(undefined);

export const useActivityLogContext = () => {
  const context = useContext(ActivityLogContext);
  if (!context) {
    throw new Error(
      "useActivityLogContext must be used within an ActivityLogProvider"
    );
  }
  return context;
};
