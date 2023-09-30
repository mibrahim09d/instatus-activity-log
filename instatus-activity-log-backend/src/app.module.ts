import { Module } from '@nestjs/common';
import { ActivityEventsLogModule } from './modules/activity-events-log/activity-events-log.module';
import { PrismaService } from './common/prisma/services/primsa.service';

@Module({
  imports: [ActivityEventsLogModule],
  controllers: [],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
