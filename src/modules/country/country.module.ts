import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CountryController } from './country.controller';
import { CountryService } from './country.service';
import { Country, CountrySchema } from '../../database/schemas/country.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Country.name, schema: CountrySchema, collection: 'country' },
    ]),
  ],
  controllers: [CountryController],
  providers: [CountryService],
})
export class CountryModule {}
