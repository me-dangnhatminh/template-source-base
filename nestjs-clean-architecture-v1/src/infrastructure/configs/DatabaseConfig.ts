import { ConfigWrapper } from "application/common";
import { env } from "process";

import { IsNotEmpty, IsNumber } from "class-validator";

export class DatabaseConfig extends ConfigWrapper {
  @IsNotEmpty() DB_HOST = env.DB_HOST ?? "";
  @IsNumber() DB_PORT = parseInt(env.DB_PORT ?? "");
  @IsNotEmpty() DB_USERNAME = env.DB_USERNAME ?? "";
  @IsNotEmpty() DB_PASSWORD = env.DB_PASSWORD ?? "";
  @IsNotEmpty() DB_NAME = env.DB_NAME ?? "";
  @IsNotEmpty() DB_URL = env.DB_URL ?? "";
}
