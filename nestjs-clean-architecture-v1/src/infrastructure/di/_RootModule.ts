import { ConfigWrapper } from "application/common";
import { AppConfig } from "infrastructure/configs";

import { UserModule } from "./UserModule";
import { InfrastructureModule } from "./InfrastructureModule";

import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env",
      expandVariables: true,
      load: ConfigWrapper.getConfigs(AppConfig),
    }),
    InfrastructureModule,
    UserModule,
  ],
  providers: [],
})
export class RootModule {}
