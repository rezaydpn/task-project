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
import { RegionService } from './region.service';
import { Region } from '../../schemas/region.schema';

@Controller('region')
export class RegionController {
  constructor(private readonly regionService: RegionService) {}

  @Get()
  async getAllRegion(@Res() response) {
    const regions = await this.regionService.getAll();
    return response.status(HttpStatus.OK).json({ regions });
  }

  @Post()
  async createRegion(@Res() response, @Body() region: Region) {
    try {
      const newRegion = await this.regionService.create(region);
      return response.status(HttpStatus.CREATED).json({ newRegion });
    } catch (err) {
      console.log(err)
      return response.json(err.response);
     }
  }

  @Get('/:id')
  async getRegionById(@Res() response, @Param('id') id) {
    const region = await this.regionService.getById(id);
    return response.status(HttpStatus.OK).json({ region });
  }

  @Put('/:id')
  async updateRegion(
    @Res() response,
    @Param('id') id,
    @Body() region: Region,
  ) {
    const updatedRegion = await this.regionService.update(id, region);
    return response.status(HttpStatus.OK).json({ updatedRegion });
  }

  @Delete('/:id')
  async deleteRegion(@Res() response, @Param('id') id) {
    const deletedRegion = await this.regionService.delete(id);
    return response.status(HttpStatus.OK).json({ deletedRegion });
  }
}
