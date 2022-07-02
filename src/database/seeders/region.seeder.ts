import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Region } from '../schemas/Region.schema';
import { Seeder, DataFactory } from 'nestjs-seeder';

@Injectable()
export class RegionSeeder implements Seeder {
  constructor(@InjectModel(Region.name) private readonly region: Model<Region>) {}

  async seed(): Promise<any> {
    const regions = DataFactory.createForClass(Region).generate(10);
    return this.region.insertMany(regions);
  }

  async drop(): Promise<any> {
    return this.region.deleteMany({});
  }
}
