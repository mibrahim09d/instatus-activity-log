import { ActivityLogDataType } from "@/types/activity-log-data.type";

export const SHORT_DATETIME_FORMAT: Intl.DateTimeFormatOptions = {
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  hour12: true,
};

export const MOCK_DATA: ActivityLogDataType[] = [
  {
    id: "evt_15B56WILKW5K1",
    object: "event",
    actor_id: "user_3VG74289PUA2",
    actor_name: "Ali Salah",
    group: "instatus.com",
    action: {
      id: "evt_action_PGTD81NCAOQ2",
      object: "event_action",
      name: "user.login_succeeded",
    },
    target_id: "user_DOKVD1U3L030",
    target_name: "ali@instatus.com",
    location: "105.40.62.95",
    occurred_at: new Date("2022-01-05T14:31:13.607Z"),
    metadata: {
      redirect: "/setup",
      description: "User login succeeded.",
      x_request_id: "req_W1Y13QOHMI5H",
    },
  },
  {
    id: "evt_15B56WILKW5K2",
    object: "event",
    actor_id: "user_3VG74289PUA2",
    actor_name: "Ali Salah",
    group: "instatus.com",
    action: {
      id: "evt_action_PGTD81NCAOQ2",
      object: "event_action",
      name: "incident.create_succeeded",
    },
    target_id: "user_DOKVD1U3L030",
    target_name: "baraa@instatus.com",
    location: "105.40.62.95",
    occurred_at: new Date("2022-01-05T14:31:13.607Z"),
    metadata: {
      redirect: "/setup",
      description: "User login succeeded.",
      x_request_id: "req_W1Y13QOHMI5H",
    },
  },
  {
    id: "evt_15B56WILKW5K3",
    object: "event",
    actor_id: "user_3VG74289PUA2",
    actor_name: "Ali Salah",
    group: "instatus.com",
    action: {
      id: "evt_action_PGTD81NCAOQ2",
      object: "event_action",
      name: "user.invited_teammate",
    },
    target_id: "user_DOKVD1U3L030",
    target_name: "omar@instatus.com",
    location: "105.40.62.95",
    occurred_at: new Date("2022-01-05T14:31:13.607Z"),
    metadata: {
      redirect: "/setup",
      description: "User login succeeded.",
      x_request_id: "req_W1Y13QOHMI5H",
    },
  },
];
