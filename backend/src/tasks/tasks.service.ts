import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

async create(createTaskDto: CreateTaskDto) {
  return this.prisma.client.task.create({
    data: {
      title: createTaskDto.title,
      description: createTaskDto.description || null,
      status: 'To Do',
    },
  });
}

  async findAll() {
    return this.prisma.client.task.findMany();
  }

  async findOne(id: string) {
    return this.prisma.client.task.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateTaskDto: UpdateTaskDto) {
    return this.prisma.client.task.update({
      where: { id },
      data: updateTaskDto,
    });
  }

  async remove(id: string) {
    return this.prisma.client.task.delete({
      where: { id },
    });
  }
}