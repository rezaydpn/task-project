import { DefaultValuePipe } from '@nestjs/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Country } from './country.schema';

export type CityDocument = City & Document;

@Schema()
export class City {
  @Prop({ required: true })
  title: string;

  @Prop({ default: 0, required: true })
  order: number;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Country',
    required: true,
  })
  country: Country;
}

export const CitySchema = SchemaFactory.createForClass(City);
