import { Topic } from '../../entities/topic.entity';

export const topicStub = (): Topic => {
  return {
    name: 'Test Topic',
    questions: [],
  };
};
