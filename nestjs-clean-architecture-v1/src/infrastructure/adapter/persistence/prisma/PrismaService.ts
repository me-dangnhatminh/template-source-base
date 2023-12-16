import { AppException } from "application/common/AppExeption";
import { AppErrors } from "application/common/contants/AppErrors";

import { Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect().catch((err) => {
      throw new AppException(AppErrors.CONFIGURATION_ERROR, err);
    });
  }
}
