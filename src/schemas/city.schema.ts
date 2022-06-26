import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Country } from './country.schema';

export type CityDocument = City & Document;

@Schema()
export class City {
  @Prop({ required: true })
  title: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Country' })
  country: Country;
}

export const CitySchema = SchemaFactory.createForClass(City);
