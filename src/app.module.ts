import { PropertyModule } from './property/property.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [PropertyModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
