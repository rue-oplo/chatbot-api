import { MockModel } from '../../../db/support/mock.entity';
import { Topic } from '../../entities/topic.entity';
import { topicStub } from '../stubs/topic.stub';

export class TopicModel extends MockModel<Topic> {
  protected entityStub = topicStub();
}
