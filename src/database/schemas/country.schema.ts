import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { City } from './city.schema';
import { Region } from './region.schema';
import { Factory } from 'nestjs-seeder';

export type CountryDocument = Country & Document;

@Schema()
export class Country {
  
  @Factory((faker) => faker.name.findName())
  @Prop({ required: true })
  title: string;

  @Factory('62c03962f22d8ef7502d191a')
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Region', required: true })
  region: Region;
}

export const CountrySchema = SchemaFactory.createForClass(Country);
