import { Module } from '@nestjs/common';
import { ActivityEventsLogController } from './controllers/activity-events-log/activity-events-log.controller';
import { ActivityEventsLogService } from './services/activity-events-log/activity-events-log.service';
import { PrismaModule } from '../../common/prisma/prisma.module';

@Module({
  controllers: [ActivityEventsLogController],
  providers: [ActivityEventsLogService],
  imports: [PrismaModule],
})
export class ActivityEventsLogModule {}
