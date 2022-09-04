import { CreateTaskDto } from './dto/create-task.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { Task } from './models/task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get('/tasks')
  getAllTasls(): Task[] {
    return this.tasksService.getAllTasks();
  }

  @Get('/tasks/:id')
  getTaskById() {
    return 'ID With Tasks';
  }

  @Post('/task/create')
  createTask(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.createTask(createTaskDto);
  }
}
