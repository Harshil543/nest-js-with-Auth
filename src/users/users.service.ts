import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private readonly UsersModel: typeof User,
  ) {}

  async create(userData: any): Promise<User> {
    const user = new User(userData);
    return await user.save();
  }

  async findAll(): Promise<User[]> {
    return this.UsersModel.findAll();
  }

  async findOne(id: number): Promise<User> {
    return this.UsersModel.findOne({ where: { id } });
  }

  async update(id: number, userData: any): Promise<[number, User[]]> {
    const [affectedCount, affectedRows] = await this.UsersModel.update(
      userData,
      {
        where: { id },
        returning: true,
      },
    );
    return [affectedCount, affectedRows as User[]];
  }

  async remove(id: number): Promise<number> {
    return this.UsersModel.destroy({ where: { id } });
  }
}
