"use client";

import { Container } from "@mui/system";
import { ActivityLogLayout } from "./activity-log-layout";
import { ActivityLogProvider } from "@/contexts/activity-log/activity-log.provider";

export const ActivityLog = () => {
  return (
    <ActivityLogProvider>
      <Container sx={{ mt: 5 }}>
        <ActivityLogLayout />
      </Container>
    </ActivityLogProvider>
  );
};
