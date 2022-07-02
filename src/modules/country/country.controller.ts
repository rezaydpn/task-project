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
import { CountryService } from './country.service';
import { Country } from '../../database/schemas/country.schema';

@Controller('Country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Get("/getCitiesByCountry/:country")
  async getCitiesByCountry(@Res() response,@Param('country') country) {
    const cities = await this.countryService.getCitiesByCountry(country);
    return response.status(HttpStatus.OK).json({ cities });
  }

  @Get()
  async getAllCountry(@Res() response) {
    const countries = await this.countryService.getAll();
    return response.status(HttpStatus.OK).json({ countries });
  }

  @Post()
  async createCountry(@Res() response, @Body() Country: Country) {
    try {
      const newCountry = await this.countryService.create(Country);
      return response.status(HttpStatus.CREATED).json({ newCountry });
    } catch (err) {
      console.log(err)
      return response.json(err.response);
     }
  }

  @Get('/:id')
  async getCountryById(@Res() response, @Param('id') id) {
    const Country = await this.countryService.getById(id);
    return response.status(HttpStatus.OK).json({ Country });
  }

  @Put('/:id')
  async updateCountry(
    @Res() response,
    @Param('id') id,
    @Body() country: Country,
  ) {
    const updatedCountry = await this.countryService.update(id, country);
    return response.status(HttpStatus.OK).json({ updatedCountry });
  }

  @Delete('/:id')
  async deleteCountry(@Res() response, @Param('id') id) {
    const deletedCountry = await this.countryService.delete(id);
    return response.status(HttpStatus.OK).json({ deletedCountry });
  }
}
