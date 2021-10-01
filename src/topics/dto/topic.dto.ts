import { Types } from 'mongoose';

export class TopicDto {
  name: string;
  questions: Types.ObjectId[];
}
