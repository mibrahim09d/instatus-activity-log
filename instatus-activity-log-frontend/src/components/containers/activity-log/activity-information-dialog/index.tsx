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
          width: "110%",
          backgroundColor: "gray",
          margin: "0 0 0 -5%",
          boxShadow: "0 3px 6px 1px rgba(0, 0, 0, 0.16)",
        }}
      >
        Test
      </Box>
    </Box>
  );
};
