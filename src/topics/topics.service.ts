import { Injectable } from '@nestjs/common';
import { TopicDto } from './dto/topic.dto';

@Injectable()
export class TopicsService {
  create(createTopicDto: TopicDto) {
    return 'This action adds a new topic';
  }

  findAll() {
    return `This action returns all topics`;
  }

  findOne(id: number) {
    return `This action returns a #${id} topic`;
  }

  update(id: number, updateTopicDto: TopicDto) {
    return `This action updates a #${id} topic`;
  }

  remove(id: number) {
    return `This action removes a #${id} topic`;
  }
}
