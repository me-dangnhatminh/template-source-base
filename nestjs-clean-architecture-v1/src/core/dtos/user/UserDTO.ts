import { AuthProviderName, UserRole, UserStatus } from "../../common/contants";

export class UserDTO {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  status: UserStatus;
  avatarUrl: string;
  authProviderName: AuthProviderName;
}
