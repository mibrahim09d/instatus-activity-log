export interface CreateEventCommand {
  object: string;
  actor_id: string;
  actor_name: string;
  group: string;
  action?: { object: string; name: string };
  target_id: string;
  target_name: string;
  location: string;
  occurred_at: Date;
  metadata?: { redirect: string; description: string; x_request_id: string };
}
