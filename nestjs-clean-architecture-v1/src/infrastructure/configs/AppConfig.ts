import { ConfigWrapper } from "application/common";
import { IsNotEmpty, IsNumber, IsBoolean } from "class-validator";
import { env } from "process";

export class AppConfig extends ConfigWrapper {
  @IsNotEmpty() NODE_ENV = env.NODE_ENV ?? "development";

  @IsNotEmpty() API_HOST = env.APP_API_HOST ?? "";
  @IsNumber() API_PORT = parseInt(env.APP_API_PORT ?? "5000");
  @IsNotEmpty() API_KEY = env.APP_API_KEY ?? "";
  @IsNotEmpty() API_SECRET = env.APP_API_SECRET ?? "";

  @IsNotEmpty() API_ACCESS_TOKEN_SECRET = `${this.API_SECRET}:access-token`;
  @IsNumber() API_ACCESS_TOKEN_TTL_IN_MINUTES = 30;
  @IsNotEmpty() API_ACCESS_TOKEN_HEADER = "x-api-token";

  @IsNotEmpty() API_REFRESH_TOKEN_SECRET = `${this.API_SECRET}:refresh-token`;
  @IsNumber() API_REFRESH_TOKEN_TTL_IN_MINUTES = 30;
  @IsNotEmpty() API_REFRESH_TOKEN_HEADER = "x-api-refresh-token";

  @IsBoolean() API_LOG_ENABLE = true;

  @IsNotEmpty() API_CORS_ORIGIN = "*";
  @IsNotEmpty() API_CORS_METHOD = "GET,POST,PUT,DELETE,OPTIONS";
}
