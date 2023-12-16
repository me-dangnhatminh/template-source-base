import { User } from "core/entites/user";
import {
  ChangePasswordDTO,
  CreateUserDTO,
  UpdateUserDTO,
} from "core/dtos/user";
import { UserService } from "core/services";

import { UnitOfWork } from "../repositories/UnitOfWork";
import { AppException } from "application/common/AppExeption";
import { AppErrors } from "application/common/contants/AppErrors";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserServiceImpl extends UserService {
  constructor(private readonly unitOfWork: UnitOfWork) {
    super();
  }

  async addUser(dto: CreateUserDTO): Promise<User> {
    await this.unitOfWork.userRepository
      .findUserByEmail(dto.email)
      .then((user) => {
        if (user) throw new AppException(AppErrors.USER_EMAIL_ALREADY_EXISTS);
      });

    const user = await User.create(dto);
    await this.unitOfWork.userRepository.add(user);
    return user;
  }

  async getUserById(userId: string): Promise<User> {
    const user = await this.unitOfWork.userRepository.findById(userId);
    if (!user) throw new AppException(AppErrors.USER_NOT_FOUND);
    return user;
  }

  async getUserByEmail(userEmail: string): Promise<User> {
    const user =
      await this.unitOfWork.userRepository.findUserByEmail(userEmail);
    if (!user) throw new AppException(AppErrors.USER_NOT_FOUND);
    return user;
  }

  async updateProfile(
    userIdToUpdate: string,
    dto: UpdateUserDTO,
  ): Promise<void> {
    const user = await this.getUserById(userIdToUpdate);
    const { firstName, lastName, avatarUrl } = dto;
    await user.edit({ firstName, lastName, avatarUrl });
    await this.unitOfWork.userRepository.update(user);
  }

  async updatePassword(
    userIdToUpdate: string,
    dto: ChangePasswordDTO,
  ): Promise<void> {
    const user = await this.getUserById(userIdToUpdate);
    const { currentPassword, newPassword } = dto;
    if (!user.comparePassword(currentPassword))
      throw new AppException(AppErrors.USER_PASSWORD_NOT_MATCH);
    await user.edit({ password: newPassword });
    await this.unitOfWork.userRepository.update(user);
  }

  async updateAvatar(
    userIdToUpdate: string,
    newAvatarUrl: string,
  ): Promise<void> {
    const user = await this.getUserById(userIdToUpdate);
    await user.edit({ avatarUrl: newAvatarUrl });
    await this.unitOfWork.userRepository.update(user);
  }

  async deleteUserById(userId: string): Promise<void> {
    const user = await this.getUserById(userId);
    await this.unitOfWork.userRepository.delete(user);
  }
}
