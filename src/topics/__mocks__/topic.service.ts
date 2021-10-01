import { topicStub } from '../test/stubs/topic.stub';

export const TopicService = jest.fn().mockReturnValue({
  fetchAllTopics: jest.fn().mockResolvedValue([topicStub()]),
  createNewTopic: jest.fn().mockResolvedValue(topicStub()),
  findTopicByName: jest.fn().mockResolvedValue(topicStub()),
  updateTopic: jest.fn().mockResolvedValue(topicStub()),
  removeTopic: jest.fn().mockResolvedValue(topicStub()),
});
