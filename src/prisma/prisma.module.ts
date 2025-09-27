import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  providers: [PrismaService],
  // La línea 'exports' publica el PrismaService
  exports: [PrismaService],
})
export class PrismaModule {}