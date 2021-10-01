import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TopicsModule } from './topics/topics.module';
// import { QuestionModule } from './questions/question.module';
// import { AnswersModule } from './answers/answers.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/chatbot'),
    TopicsModule,
    // QuestionModule,
    // AnswersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
