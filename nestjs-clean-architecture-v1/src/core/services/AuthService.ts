import { LoggedInDTO } from "core/dtos/auth/LoggedInDTO";

export abstract class AuthService {
  abstract register(email: string, password: string): Promise<LoggedInDTO>;
  abstract login(email: string, password: string): Promise<LoggedInDTO>;
  abstract loginWithGoogle(): Promise<LoggedInDTO>;
  // abstract logout(): Promise<boolean>;
  abstract forgotPassword(email: string): Promise<void>;
  abstract resetPassword(
    oldPassword: string,
    newPassword: string,
  ): Promise<void>;
  abstract verifyEmail(token: string): Promise<boolean>;
  abstract refreshAccessToken(refreshToken: string): Promise<LoggedInDTO>;
}
