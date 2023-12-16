import { User } from "core/entites/user";
import {
  ChangePasswordDTO,
  CreateUserDTO,
  UpdateUserDTO,
} from "core/dtos/user";

export abstract class UserService {
  abstract addUser(dto: CreateUserDTO): Promise<User>;
  abstract getUserById(userId: string): Promise<User>;
  abstract getUserByEmail(userEmail: string): Promise<User>;
  abstract updateProfile(
    userIdToUpdate: string,
    dto: UpdateUserDTO,
  ): Promise<void>;
  abstract updatePassword(
    userIdToUpdate: string,
    dto: ChangePasswordDTO,
  ): Promise<void>;
  abstract updateAvatar(
    userIdToUpdate: string,
    newAvatarUrl: string,
  ): Promise<void>;
  abstract deleteUserById(userId: string): Promise<void>;
}
