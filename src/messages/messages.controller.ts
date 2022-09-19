import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {

    constructor(private $messages: MessagesService) {}
    
    @Get()
    async listMessages() {
        return await this.$messages.list();;
    };

    @Get(':id')
    async findOneMessage(@Param('id') id: string | number) {
        return await this.$messages.findOne(id);
    };

    @Post()
    async createMessage(@Body() body: CreateMessageDto) {
        return await this.$messages.create(body);
    };

    @Patch(':id')
    async updateMessage(@Param('id') id: string | number, @Body() body: CreateMessageDto) {
        return await this.$messages.update(id, body);
    };

    @Delete(':id')
    async deleteMessage(@Param('id') id: string | number) {
        return await this.$messages.delete(id);
    }
}
