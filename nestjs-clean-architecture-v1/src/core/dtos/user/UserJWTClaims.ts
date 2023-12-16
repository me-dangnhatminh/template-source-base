import { UserRole, UserStatus } from "core/common/contants";

export class UserJWTClaims {
  userId: string;
  email: string;
  roles: UserRole;
  status: UserStatus;
}
