import { ActivityLogDataType } from "@/types/activity-log-data.type";
import { formatShortDate } from "@/utils/utils";
import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import { useState } from "react";
import { ActivityInformationDialog } from "../activity-information-dialog";

export interface ActivityDataProps {
  activityData: ActivityLogDataType[];
}

export const ActivityData = ({ activityData }: ActivityDataProps) => {
  const [selectedId, setSelectedId] = useState<string | undefined>();
  const renderSingleItem = (text: string, showInitials = false) => (
    <Grid item lg={4} xs={4}>
      <Typography fontSize="14px" fontWeight={400}>
        {showInitials && text?.length > 0 && (
          <Box display="inline-block" mr={1}>
            <Avatar
              sx={{
                width: "25px",
                height: "25px",
                background:
                  "linear-gradient(138.62deg, #F3994A 14.17%, #B325E2 84.99%)",
              }}
            >
              <Typography
                fontSize="12px"
                fontWeight="700px"
                fontStyle="uppercase"
                className="capitalize"
              >
                {text.charAt(0)}
              </Typography>
            </Avatar>
          </Box>
        )}
        {text}
      </Typography>
    </Grid>
  );

  const renderActivityDataLine = (activity: ActivityLogDataType) => (
    <Grid
      container
      spacing={2}
      mb={2}
      className="hover:cursor-pointer"
      onClick={() => setSelectedId(activity.id)}
    >
      {renderSingleItem(activity.target_name, true)}
      {renderSingleItem(activity.action?.name)}
      {renderSingleItem(formatShortDate(activity.occurred_at))}
    </Grid>
  );
  const renderActivityDataInformation = (activity: ActivityLogDataType) => (
    <ActivityInformationDialog activity={activity} />
  );

  return (
    <Box>
      {activityData.map((activity: ActivityLogDataType, index: number) => (
        <Box key={index}>
          {selectedId !== activity.id && renderActivityDataLine(activity)}
          {selectedId === activity.id &&
            renderActivityDataInformation(activity)}
        </Box>
      ))}
    </Box>
  );
};
