import { User } from "core/entites/user";
import { AuthProviderName, UserRole, UserStatus } from "core/common/contants";

import {
  User as UserOrm,
  UserRole as UserRoleOrm,
  AuthProviderName as AuthProviderNameOrm,
} from "@prisma/client";

export class UserMapper {
  static toOrm(user: User): UserOrm {
    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      role: user.role as UserRoleOrm,
      avatarUrl: user.avatarUrl,
      status: user.status,
      authProviderName: user.authProviderName as AuthProviderNameOrm,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      removedAt: user.removedAt,
    };
  }

  static toDomain(user: UserOrm): User {
    return User.createSync({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      role: user.role as UserRole,
      avatarUrl: user.avatarUrl,
      status: user.status as UserStatus,
      authProviderName: user.authProviderName as AuthProviderName,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      removedAt: user.removedAt,
    });
  }
}
