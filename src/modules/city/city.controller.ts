import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  HttpStatus,
  Res,
  Body,
} from '@nestjs/common';
import { CityService } from './city.service';
import { City } from '../../schemas/city.schema';

@Controller('city')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Get()
  async getAllCity(@Res() response) {
    const cities = await this.cityService.getAll();
    return response.status(HttpStatus.OK).json({ cities });
  }

  @Post()
  async createCity(@Res() response, @Body() city: City) {
    const newCity = await this.cityService.create(city);
    return response.status(HttpStatus.CREATED).json({ newCity });
  }

  @Get('/:id')
  async getCityById(@Res() response, @Param('id') id) {
    const city = await this.cityService.getById(id);
    return response.status(HttpStatus.OK).json({ city });
  }

  @Put('/:id')
  async updateCity(@Res() response, @Param('id') id, @Body() city: City) {
    const updatedCity = await this.cityService.update(id, city);
    return response.status(HttpStatus.OK).json({ updatedCity });
  }

  @Delete('/:id')
  async deleteCity(@Res() response, @Param('id') id) {
    const deletedCity = await this.cityService.delete(id);
    return response.status(HttpStatus.OK).json({ deletedCity });
  }
}
