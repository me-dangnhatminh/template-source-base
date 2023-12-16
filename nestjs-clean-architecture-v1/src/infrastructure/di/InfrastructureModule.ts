import { Module } from "@nestjs/common";
import { UnitOfWorkModule } from "./UnitOfWorkModule";

@Module({
  imports: [UnitOfWorkModule],
  providers: [],
  exports: [UnitOfWorkModule],
})
export class InfrastructureModule {}
