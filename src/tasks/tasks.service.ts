import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './models/task.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: string) {
    return id;
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const task: Task = {
      id: uuid,
      title: createTaskDto.title,
      description: createTaskDto.description,
      status: TaskStatus.DONE,
    };

    this.tasks.push(task);
    return task;
  }

  deleteTask(id: string) {
    return id;
  }

  updateTask(id: string) {
    return id;
  }

  updateTaskStatus(id: string, status: TaskStatus) {
    return id + status;
  }
}
