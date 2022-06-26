import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Country } from './country.schema';
export type RegionDocument = Region & Document;

@Schema()
export class Region {
  @Prop({ required: true })
  title: string;

  // @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Country' }] })
  // country: Country[];
}

export const RegionSchema = SchemaFactory.createForClass(Region);
