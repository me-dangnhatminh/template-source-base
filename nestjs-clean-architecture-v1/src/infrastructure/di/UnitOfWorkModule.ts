import { Module, Provider, Scope } from "@nestjs/common";
import { UnitOfWork } from "application/repositories/UnitOfWork";
import { PrismaService } from "infrastructure/adapter/persistence/prisma/PrismaService";
import { PrismaUnitOfWork } from "infrastructure/adapter/persistence/prisma/PrismaUnitOfWork";

const UnitOfWorkProvider: Provider = {
  provide: UnitOfWork,
  useClass: PrismaUnitOfWork,
  scope: Scope.REQUEST,
};

const PrismaServiceProvider: Provider = {
  provide: PrismaService,
  useClass: PrismaService,
  scope: Scope.DEFAULT,
};

@Module({
  providers: [PrismaServiceProvider, UnitOfWorkProvider],
  exports: [UnitOfWorkProvider],
})
export class UnitOfWorkModule {}
