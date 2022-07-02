import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { City } from '../schemas/city.schema';
import { Seeder, DataFactory } from 'nestjs-seeder';

@Injectable()
export class CitySeeder implements Seeder {
  constructor(@InjectModel(City.name) private readonly city: Model<City>) {}

  async seed(): Promise<any> {
    const cities = DataFactory.createForClass(City).generate(10);
    return this.city.insertMany(cities);
  }

  async drop(): Promise<any> {
    return this.city.deleteMany({});
  }
}
