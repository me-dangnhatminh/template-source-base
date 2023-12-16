import { Controller, Get } from "@nestjs/common";
import { UserService } from "core/services";

@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll() {
    return await this.userService.getUserById("");
  }
}
