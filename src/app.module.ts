import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { CityModule } from './modules/city/city.module';
import { CountryModule } from './modules/country/country.module';
import { RegionModule } from './modules/region/region.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/test'),
    CityModule,
    CountryModule,
    RegionModule,
    // ConfigModule.forRoot({ envFilePath: ['.env'] }),
  ],
})
export class AppModule {}
