import { AuthProviderName, UserRole, UserStatus } from "core/common/contants";

export class CreateUserDTO {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  role?: UserRole;
  status?: UserStatus;
  avatarUrl?: string;
  authProviderName?: AuthProviderName;
}
