import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type TopicDocument = Topic & Document;
@Schema()
export class Topic {
  @Prop()
  name: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Question' }] })
  questions: Types.ObjectId[];
}

export const TopicSchema = SchemaFactory.createForClass(Topic);
TopicSchema.index({ name: 1 });
