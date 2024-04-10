import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  Patch,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.model';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() userData: any): Promise<User> {
    return this.usersService.create(userData);
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(Number(id));
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() userData: any,
  ): Promise<[number, User[]]> {
    return this.usersService.update(Number(id), userData);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<number> {
    return this.usersService.remove(Number(id));
  }
}
