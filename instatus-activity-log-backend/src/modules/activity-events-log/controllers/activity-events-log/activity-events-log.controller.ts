import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateEventCommand } from '../../dto/commands/create-event-command.dto';
import { PaginatedRequest } from '../../dto/requests/paginated.request';
import { ActivityEventsLogService } from '../../services/activity-events-log/activity-events-log.service';

@Controller('events')
export class ActivityEventsLogController {
  constructor(
    private readonly activityEventsLogService: ActivityEventsLogService,
  ) {}

  @Get()
  get(@Query() request: PaginatedRequest) {
    return this.activityEventsLogService.findAll(request);
  }

  @Post()
  post(@Body() event: CreateEventCommand) {
    console.log('Evebt=', event);
  }
}
