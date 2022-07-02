import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Country } from './country.schema';
import { Factory } from 'nestjs-seeder';

export type RegionDocument = Region & Document;

@Schema()
export class Region {
 
  @Factory((faker) => faker.name.findName())
  @Prop({ required: true })
  title: string;
}

export const RegionSchema = SchemaFactory.createForClass(Region);
