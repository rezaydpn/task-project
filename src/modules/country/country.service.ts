import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Country, CountryDocument } from '../../schemas/country.schema';

@Injectable()
export class CountryService {
  constructor(
    @InjectModel(Country.name)
    private readonly CountryModel: Model<CountryDocument>,
  ) {}

  async getCitiesByCountry(country): Promise<any[]> {
    return await this.CountryModel.aggregate()
      .match({ title: country })
      .lookup({
        from: 'city',
        localField: '_id',
        foreignField: 'country',
        as: 'cities',
      })
      .exec();
  }

  async getAll(): Promise<Country[]> {
    return await this.CountryModel.find().populate('region').exec();
  }

  async create(Country: Country): Promise<Country> {
    const newCountry = new this.CountryModel(Country);
    return await newCountry.save();
  }

  async getById(id): Promise<Country> {
    return await this.CountryModel.findById(id).exec();
  }

  async update(id, Country: Country): Promise<Country> {
    return await this.CountryModel.findByIdAndUpdate(id, Country, {
      new: true,
    });
  }

  async delete(id): Promise<any> {
    return await this.CountryModel.findByIdAndRemove(id);
  }
}
