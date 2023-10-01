import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/services/primsa.service';
import { PaginatedRequest } from '../../dto/requests/paginated.dto';
import { CreateEventCommand } from '../../dto/commands/create-event-command.dto';
import { Prisma } from '@prisma/client';
import { plainToInstance } from 'class-transformer';
import { ActivityEventLogResponse } from '../../dto/response/activity-event-log.dto';

@Injectable()
export class ActivityEventsLogService {
  constructor(private readonly prismaService: PrismaService) {}

  /**
   * Retrieves paginated data based on the provided request.
   *
   * @param {PaginatedRequest} request - The request object containing the page, pageSize, and filter.
   * @return {Promise<any[]>} - A promise that resolves to an array of data objects.
   */
  async findAll(request: PaginatedRequest) {
    const { page, pageSize, filter } = request;
    const skip = (page - 1) * pageSize;
    const filterString = filter ?? '';

    let whereCondition = {};

    if (filterString !== '') {
      whereCondition = {
        OR: [
          { actor_id: { contains: filterString } },
          { target_id: { contains: filterString } },
          {
            action: {
              name: { contains: filterString },
            },
          },
        ],
      };
    }

    const result = await this.prismaService.activityLog.findMany({
      skip,
      take: Number(pageSize),
      where: whereCondition,
      include: {
        action: true,
        metadata: true,
      },
    });

    return plainToInstance(ActivityEventLogResponse, result, {
      excludeExtraneousValues: true,
    });
  }

  /**
   * Create an activity event.
   *
   * @param {CreateEventCommand} event - The event object containing the details of the event.
   * @return {Promise<void>} - A promise that resolves when the activity log is created successfully.
   */
  async createActivityEvent(event: CreateEventCommand) {
    const activityLogInput = this.createActivityLogBody(event);

    await this.prismaService.activityLog.create({
      data: activityLogInput,
    });
  }

  private createActivityLogBody(event: CreateEventCommand) {
    const {
      actor_id,
      actor_name,
      group,
      target_id,
      target_name,
      location,
      occurred_at,
      action,
      metadata,
    } = event;

    const activityLogInput: Prisma.ActivityLogCreateInput = {
      actor_id,
      actor_name,
      group,
      target_id,
      target_name,
      location,
      occurred_at: new Date(occurred_at),
    };

    if (action) {
      activityLogInput.action = {
        create: {
          ...action,
        },
      };
    }

    if (metadata) {
      activityLogInput.metadata = {
        create: {
          ...metadata,
        },
      };
    }

    return activityLogInput;
  }
}
