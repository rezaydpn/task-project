import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { City } from './city.schema';
import { Region } from './region.schema';

export type CountryDocument = Country & Document;

@Schema()
export class Country {
  @Prop({ required: true })
  title: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Region', required: true })
  region: Region;

  // @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'City' }] })
  // city: City[];
}

export const CountrySchema = SchemaFactory.createForClass(Country);
