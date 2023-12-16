import { RootModule } from "./di/_RootModule";
import { AppConfig } from "./configs/AppConfig";

import { Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";

export class ServerApplication {
  private configService: ConfigService<AppConfig, true>;
  private app: NestExpressApplication;

  public async run(): Promise<void> {
    this.app = await NestFactory.create(RootModule);
    this.configService = this.app.get(ConfigService);

    await this.app.listen(this.configService.get("API_PORT"), () =>
      this.logSync(),
    );
  }

  private logSync(): void {
    const host = this.configService.get("API_HOST");
    const port = this.configService.get("API_PORT");
    const context = ServerApplication.name;
    Logger.log(`Server started on: ${host}:${port}`, context);
  }
}
