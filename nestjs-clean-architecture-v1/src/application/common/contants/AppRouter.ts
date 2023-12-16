export class AuthRouterV1 {
  static readonly VERSION = "v1";

  static readonly LOGIN = `/${AuthRouterV1.VERSION}/auth/login`;
  static readonly LOGIN_GOOGLE = `/${AuthRouterV1.VERSION}/auth/login-google`;
  static readonly LOGOUT = `/${AuthRouterV1.VERSION}/auth/logout`;
  static readonly REGISTER = `/${AuthRouterV1.VERSION}/auth/register`;
  static readonly REFRESH_TOKEN = `/${AuthRouterV1.VERSION}/auth/refresh-token`;
}
