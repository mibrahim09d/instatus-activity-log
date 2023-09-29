export interface ActivityLogDataType {
  id: string;
  object: string;
  actor_id: string;
  actor_name: string;
  group: string;
  action: EventAction;
  target_id: string;
  target_name: string;
  location: string;
  occurred_at: Date;
  metadata: EventMetadata;
}

export interface EventAction {
  id: string;
  object: string;
  name: string;
}

export interface EventMetadata {
  redirect: string;
  description: string;
  x_request_id: string;
}
