import { Prisma } from "@prisma/client";
import { BaseRepository } from "application/common/BaseRepository";
import { Entity } from "core/common";

export abstract class PrismaBaseRepository<
  T extends Entity<any>,
> extends BaseRepository<T> {
  public context: Prisma.TransactionClient;
  constructor(context: Prisma.TransactionClient) {
    super();
    this.context = context;
  }
}
