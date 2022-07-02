import { DefaultValuePipe } from '@nestjs/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Country } from './country.schema';
import { Factory } from 'nestjs-seeder';

export type CityDocument = City & Document;

@Schema()
export class City {
  @Prop()
  _id: mongoose.Types.ObjectId;

  @Factory((faker) => faker.name.findName())
  @Prop({ required: true })
  title: string;

  @Factory(0)
  @Prop({ default: 0, required: true })
  order: number;

  @Factory('62b19952e6fe5bba973036ef')
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Country',
    required: true,
  })
  country: Country;
}

export const CitySchema = SchemaFactory.createForClass(City);
