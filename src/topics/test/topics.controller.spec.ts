import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Topic, TopicSchema } from '../entities/topic.entity';
import { TopicsController } from '../topics.controller';
import { TopicsService } from '../topics.service';
import { topicStub } from './stubs/topic.stub';
import { TopicDto } from '../dto/topic.dto';
import { ConflictException } from '@nestjs/common';

jest.mock('../topic.service');

describe('TopicsController', () => {
  let controller: TopicsController;
  let topicService: TopicsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [TopicsController],
      providers: [TopicsService],
    }).compile();

    controller = module.get<TopicsController>(TopicsController);
    topicService = module.get<TopicsService>(TopicsService);
    jest.clearAllMocks();
  });

  describe('when all topics are required', () => {
    describe('the fetchAllTopics method', () => {
      let topics: Topic[];

      beforeEach(async () => {
        topics = await controller.fetchAll();
      });

      test('should call the topic service without parameters', () => {
        expect(topicService.fetchAllTopics).toHaveBeenCalled();
      });

      test('should return an array of topics', () => {
        expect(topics).toEqual([topicStub()]);
      });
    });
  });

  describe('When one topic is required', () => {
    describe('the fetchTopic method', () => {
      let topic: Topic;

      beforeEach(async () => {
        topic = await controller.fetchTopic(topicStub().name);
      });

      test('should call the topicService with a name', () => {
        expect(topicService.findTopicByName).toBeCalledWith(topicStub().name);
      });

      test('should return a topic', () => {
        expect(topic).toEqual(topicStub());
      });
    });
  });

  describe('When creating a new topic', () => {
    describe('the createTopic method', () => {
      let topic: Topic;
      let topicDto: TopicDto;

      beforeEach(async () => {
        topicDto = {
          name: topicStub().name,
          questions: [],
        };

        topic = await controller.create(topicDto);
      });

      test('should call the topicService with TopicDto', () => {
        expect(topicService.createNewTopic).toBeCalledWith(topicDto);
      });

      test('then a new user should be created', () => {
        expect(topic).toEqual(topicStub());
      });

      test('should throw an error on catch', async () => {
        jest
          .spyOn(topicService, 'createNewTopic')
          .mockRejectedValue(
            new ConflictException(
              `${topicStub().name} already exists in Topics.`,
            ),
          );
        await expect(controller.create(topicDto)).rejects.toThrow(
          `${topicStub().name} already exists in Topics.`,
        );
      });
    });
  });

  describe('when updating a topic', () => {
    describe('the updateTopic method', () => {
      let topic: Topic;
      let topicDto: TopicDto;

      beforeEach(async () => {
        topicDto = {
          name: topicStub().name,
          questions: [],
        };

        topic = await controller.update(topicDto);
      });
      test('should call the topicService with TopicDto', () => {
        expect(topicService.updateTopic).resolves.toEqual({
          _id: '',
          ...topicDto,
        });
      });
    });
  });
});
