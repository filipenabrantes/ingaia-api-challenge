import { HttpService, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PropertyService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async calculatePropertyValue(meters: number) {
    const { data } = await this.httpService
      .get(this.configService.get('API_URL'))
      .toPromise();
    return data * meters;
  }
}
