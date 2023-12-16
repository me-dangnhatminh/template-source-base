//NF = Not Found
//C = Conflict
//F = Forbidden
export enum AppErrorCode {
  USER_NOT_FOUND = "U-NF-400-1",
  USER_EMAIL_ALREADY_EXISTS = "U-C-400-2",
  USER_PASSWORD_NOT_MATCH = "U-NM-400-5",
  USER_UNAUTHORIZED = "U-U-401-4",
  USER_FORBIDDEN = "U-F-403-3",

  CONFIGURATION_ERROR = "C-500-1",
}
