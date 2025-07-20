import { Module } from '@nestjs/common';
import { SrcService } from './src.service';
import { SrcController } from './src.controller';

@Module({
  controllers: [SrcController],
  providers: [SrcService],
})
export class SrcModule {}
