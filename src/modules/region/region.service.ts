import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Region, RegionDocument } from '../../schemas/region.schema';

@Injectable()
export class RegionService {
  constructor(
    @InjectModel(Region.name) private readonly RegionModel: Model<RegionDocument>,
  ) {}

  async getAll(): Promise<Region[]> {
    return await this.RegionModel.find().exec();
  }

  async create(Region: Region): Promise<Region> {
    const newRegion = new this.RegionModel(Region);
    return await newRegion.save();
  }

  async getById(id): Promise<Region> {
    return await this.RegionModel.findById(id).exec();
  }

  async update(id, Region: Region): Promise<Region> {
    return await this.RegionModel.findByIdAndUpdate(id, Region, { new: true });
  }

  async delete(id): Promise<any> {
    return await this.RegionModel.findByIdAndRemove(id);
  }
}
