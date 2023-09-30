import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/services/primsa.service';
import { PaginatedRequest } from '../../dto/requests/paginated.request';
import { CreateEventCommand } from '../../dto/commands/create-event-command.dto';

@Injectable()
export class ActivityEventsLogService {
  constructor(private readonly prismaService: PrismaService) {}

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
        ],
      };
    }

    return await this.prismaService.activityLog.findMany({
      skip,
      take: Number(pageSize),
      where: whereCondition,
    });
  }

  async createActivityEvent(event: CreateEventCommand) {
    // await this.prismaService.activityLog.create({
    //   data: {
    //     ...event,
    //     uuid: 'test',
    //   },
    // });
  }
}
