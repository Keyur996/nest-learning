import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {

    constructor(private messgesRepo: MessagesRepository) {}

    async list() {
        return this.messgesRepo.list();
    }

    async findOne(id: string | number) {
        return this.messgesRepo.findOne(id);
    }

    async create(body: CreateMessageDto) {
        return this.messgesRepo.create(body);
    }

    async update(id: string | number, body: CreateMessageDto) {
        return this.messgesRepo.update(id, body);
    }

    async delete(id: string | number) {
        return this.messgesRepo.delete(id);
    }
}
