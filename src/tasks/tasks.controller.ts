import { CreateTaskDto } from './dto/create-task.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Task, TaskStatus } from './models/task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get('/tasks')
  getAllTasls(): Task[] {
    return this.tasksService.getAllTasks();
  }

  @Get('/:id') // Using Parameters
  getTaskById(@Param('id') id: string) {
    return this.tasksService.getTaskById(id);
  }

  @Post('/create')
  createTask(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.createTask(createTaskDto);
  }

  @Delete('/delete/:id')
  deleteTask(@Param('id') id: string): any {
    return this.tasksService.deleteTask(id);
  }

  @Patch('/update/:id')
  updateTask(@Param('id') id: string) {
    return this.tasksService.updateTask(id);
  }

  @Patch('/update-status/:id')
  updateTaskStatus(
    @Param('id') id: string,
    @Body('status') status: TaskStatus,
  ) {
    return this.tasksService.updateTaskStatus(id, status);
  }
}
