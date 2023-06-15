import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';
import { PropertyService } from './property.service';

@Controller()
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {}

  @Get()
  @ApiQuery({ name: 'meters', type: Number })
  async getPropertyValue(@Query() data: any) {
    if (isNaN(data.meters) || data.meters < 10 || data.meters > 10000)
      throw new HttpException(
        'Digite apenas números na metragem, entre 10 e 10.000m2.',
        HttpStatus.BAD_REQUEST,
      );
    const propertyValue = await this.propertyService.calculatePropertyValue(
      data.meters,
    );
    return {
      'Valor do imóvel': Intl.NumberFormat('pt-BR', {
        currency: 'BRL',
        style: 'currency',
      }).format(propertyValue),
      Tamanho: `${data.meters} m2`,
    };
  }
}
