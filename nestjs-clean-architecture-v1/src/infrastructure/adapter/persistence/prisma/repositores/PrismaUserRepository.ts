import { User } from "core/entites/user";
import { PrismaBaseRepository } from "./PrismaBaseRepository";
import { Prisma } from "@prisma/client";
import { UserMapper } from "infrastructure/mapper/UserMapper";
import { UserRepository } from "application/repositories/UserRepository";

export class PrismaUserRepository
  extends PrismaBaseRepository<User>
  implements UserRepository
{
  constructor(context: Prisma.TransactionClient) {
    super(context);
  }

  async add(entity: User): Promise<User> {
    const user = UserMapper.toOrm(entity);
    await this.context.user.create({
      data: user,
    });
    return entity;
  }
  async findById(id: string): Promise<User | null> {
    const user = await this.context.user.findUnique({ where: { id } });
    if (!user) return null;
    return UserMapper.toDomain(user);
  }
  async findByIds(ids?: string[] | undefined): Promise<User[]> {
    const users = await this.context.user.findMany({
      where: { id: { in: ids } },
    });
    return users.map((user) => UserMapper.toDomain(user));
  }
  async update(entity: User): Promise<void> {
    const user = UserMapper.toOrm(entity);
    await this.context.user.update({ where: { id: user.id }, data: user });
  }
  async delete(entity: User): Promise<void> {
    const user = UserMapper.toOrm(entity);
    await this.context.user.delete({ where: { id: user.id } });
  }

  async findUserByEmail(email: string): Promise<User | null> {
    const user = await this.context.user.findUnique({ where: { email } });
    if (!user) return null;
    return UserMapper.toDomain(user);
  }
}
