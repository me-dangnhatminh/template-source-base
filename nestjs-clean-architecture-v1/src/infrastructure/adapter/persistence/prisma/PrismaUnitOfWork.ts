import { UnitOfWork } from "application/repositories/UnitOfWork";
import { UserRepository } from "application/repositories/UserRepository";
import { Prisma } from "@prisma/client";
import { PrismaService } from "./PrismaService";
import { PrismaUserRepository } from "./repositores/PrismaUserRepository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PrismaUnitOfWork implements UnitOfWork {
  private context: Prisma.TransactionClient;
  protected _userRepository: PrismaUserRepository;

  constructor(private readonly prisma: PrismaService) {
    this.context = prisma;
  }

  get userRepository(): UserRepository {
    if (!this._userRepository)
      this._userRepository = new PrismaUserRepository(this.context);
    else this._userRepository.context = this.context;
    return this._userRepository;
  }

  public async runInTransaction<T>(fn: () => Promise<T> | T): Promise<T> {
    return await this.prisma.$transaction(
      async (ct) => {
        this.context = ct;
        const result = await fn();
        this.context = this.prisma;
        return result;
      },
      { maxWait: 10000, timeout: 10000 },
    );
  }
}
