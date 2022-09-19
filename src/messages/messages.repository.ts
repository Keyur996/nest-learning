import { readFile, writeFile } from "fs/promises";
import { CreateMessageDto } from "./dtos/create-message.dto";
import { randomBytes  } from "crypto";
import { Injectable, NotFoundException } from "@nestjs/common";

@Injectable()
export class MessagesRepository {
    constructor() {}

    private createId() {
        return randomBytes(12).toString('hex');
    }

    async list() {
        const content: string = await readFile('messages.json', 'utf-8');
        const messages = JSON.parse(content || '{}');
        return messages;
    }

    async findOne(id: string | number) {
        const messages = await this.list();
        if(!messages[id]) {
            throw new NotFoundException('Message Not Found!!');
        }
        return messages[id];
    }

    async create(message: CreateMessageDto) {
        const messages = await this.list();
        const id = this.createId();
        messages[id] = { ...message, id }
        await writeFile('messages.json', JSON.stringify(messages));
        return messages;
    }

    async update(id: string | number, message: CreateMessageDto) {
        const messages = await this.list();
        if(!messages[id]) {
            throw new NotFoundException('Message Not Found!!');
        }
        messages[id] = { ...message, id };
        await writeFile('messages.json', JSON.stringify(messages));
        return messages;
    }

    async delete(id: string | number) {
        const messages = await this.list();
        if(!messages[id]) {
            throw new NotFoundException('Message Not Found!!');
        }
        delete messages[id];
        await writeFile('messages.json', JSON.stringify(messages));
        return messages;
    }
}