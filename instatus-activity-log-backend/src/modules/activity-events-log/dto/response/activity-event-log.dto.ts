import { Expose, Type } from 'class-transformer';

class ActionDto {
  @Expose()
  uuid: string;

  @Expose()
  object: string;

  @Expose()
  name: string;
}

class MetadataDto {
  @Expose()
  redirect: string;

  @Expose()
  description: string;

  @Expose()
  x_request_id: string;
}

export class ActivityEventLogResponse {
  @Expose()
  uuid: string;

  @Expose()
  actor_id: string;

  @Expose()
  actor_name: string;

  @Expose()
  group: string;

  @Expose()
  target_id: string;

  @Expose()
  target_name: string;

  @Expose()
  location: string;

  @Expose()
  occurred_at: Date;

  @Expose()
  @Type(() => ActionDto)
  action: ActionDto;

  @Expose()
  @Type(() => MetadataDto)
  metadata: MetadataDto;
}
