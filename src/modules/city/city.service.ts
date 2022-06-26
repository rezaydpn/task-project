import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { City, CityDocument } from '../../schemas/city.schema';

@Injectable()
export class CityService {
  constructor(
    @InjectModel(City.name) private readonly cityModel: Model<CityDocument>,
  ) {}

  async getAll(): Promise<City[]> {
    return await this.cityModel
      .aggregate()
      .sort({ order: 1, title: 1 })
      .project({ _id: 0, title: 1, order: 1 })
      .exec();
  }

  async getCityByRegion(region): Promise<any> {
    const cities = await this.cityModel
      .aggregate()
      .lookup({
        from: 'country',
        localField: 'country',
        foreignField: '_id',
        as: 'country',
        pipeline: [
          {
            $lookup: {
              from: 'region',
              localField: 'region',
              foreignField: '_id',
              as: 'region',
            },
          },
        ],
      })
      .match({ 'country.region.title': region })
      .project({ _id: 1, title: 1, 'country.title': 1 })
      .exec();
    return cities;
  }

  async create(City: City): Promise<City> {
    const newCity = new this.cityModel(City);
    return await newCity.save();
  }

  async getById(id): Promise<City> {
    return await this.cityModel.findById(id).exec();
  }

  async update(id, City: City): Promise<City> {
    return await this.cityModel.findByIdAndUpdate(id, City, { new: true });
  }

  async delete(id): Promise<any> {
    return await this.cityModel.findByIdAndRemove(id);
  }
}
