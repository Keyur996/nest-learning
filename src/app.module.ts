import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesController } from './messages/messages.controller';
import { MessagesRepository } from './messages/messages.repository';
import { MessagesService } from './messages/messages.service';

@Module({
  imports: [],
  controllers: [AppController, MessagesController],
  providers: [AppService, MessagesService, MessagesRepository],
})
export class AppModule {}
