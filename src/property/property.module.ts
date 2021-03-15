import { PropertyController } from './property.controller';
import { PropertyService } from './property.service';
import { HttpModule, Module } from '@nestjs/common';

@Module({
  imports: [HttpModule],
  controllers: [PropertyController],
  providers: [PropertyService],
})
export class PropertyModule {}
