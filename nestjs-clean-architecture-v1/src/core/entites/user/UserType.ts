import { ExcludeCommonEntityFields } from "../../common";
import { AuthProviderName, UserRole, UserStatus } from "../../common/contants";

export type CreateUserPayload = {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date | null;
  removedAt?: Date | null;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  role?: UserRole;
  status?: UserStatus;
  avatarUrl?: string;
  authProviderName?: AuthProviderName;
};

export type EditUserPayload = ExcludeCommonEntityFields<
  CreateUserPayload,
  "email"
>;

export interface UserJWTClaims {
  userId: string;
  email: string;
  role: UserRole;
  status: UserStatus;
}
