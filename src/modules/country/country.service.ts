import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Country, CountryDocument } from '../../schemas/country.schema';

@Injectable()
export class CountryService {
  constructor(
    @InjectModel(Country.name) private readonly CountryModel: Model<CountryDocument>,
  ) {}

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
    return await this.CountryModel.findByIdAndUpdate(id, Country, { new: true });
  }

  async delete(id): Promise<any> {
    return await this.CountryModel.findByIdAndRemove(id);
  }
}
