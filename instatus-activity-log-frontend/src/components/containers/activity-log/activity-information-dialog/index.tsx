import { ActivityLogDataType } from "@/types/activity-log-data.type";
import { Box } from "@mui/system";

export interface ActivityInformationDialogProps {
  activity: ActivityLogDataType;
}
export const ActivityInformationDialog = ({
  activity,
}: ActivityInformationDialogProps) => {
  return (
    <Box display={"relative"}>
      <Box
        sx={{
          minHeight: "5vh",
          width: "100%",
          backgroundColor: "red",
        }}
      >
        Test
      </Box>
    </Box>
  );
};
