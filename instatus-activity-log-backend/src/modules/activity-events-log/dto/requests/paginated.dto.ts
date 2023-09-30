import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class PaginatedRequest {
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  page: number;

  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  pageSize: number;

  @IsOptional()
  filter: string;
}
