import { seeder } from 'nestjs-seeder';
import { MongooseModule } from '@nestjs/mongoose';

import { Region, RegionSchema } from './database/schemas/region.schema';
import { RegionSeeder } from './database/seeders/region.seeder';

import { Country, CountrySchema } from './database/schemas/country.schema';
import { CountrySeeder } from './database/seeders/country.seeder';

import { City, CitySchema } from './database/schemas/city.schema';
import { CitySeeder } from './database/seeders/city.seeder';

seeder({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nestjs-seeder-sample'),
    MongooseModule.forFeature([{ name: Region.name, schema: RegionSchema }]),
    MongooseModule.forFeature([{ name: Country.name, schema: CountrySchema }]),
    MongooseModule.forFeature([{ name: City.name, schema: CitySchema }]),
  ],
}).run([RegionSeeder, CountrySeeder, CitySeeder]);
