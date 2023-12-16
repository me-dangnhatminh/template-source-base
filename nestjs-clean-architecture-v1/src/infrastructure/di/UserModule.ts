import { UserService } from "core/services";
import { UserServiceImpl } from "application/services";

import { Module, Provider, Scope } from "@nestjs/common";

import { InfrastructureModule } from "./InfrastructureModule";
import { UserController } from "./UserController";

const UserProvider: Provider<UserService> = {
  provide: UserService,
  useClass: UserServiceImpl,
  scope: Scope.DEFAULT,
};

@Module({
  controllers: [UserController],
  imports: [InfrastructureModule],
  providers: [UserProvider],
  exports: [UserProvider],
})
export class UserModule {}
