import { AppError } from "core/common/AppError";
import { AppMessages } from "./AppMessages";
import { AppErrorType } from "core/common/contants/AppErrorType";
import { AppErrorAction } from "core/common/contants/AppErrorAction";
import { AppErrorCode } from "./AppErrorCode";

type TAppErrorsCode = { [K in keyof typeof AppErrorCode]: AppError };
export const AppErrors: TAppErrorsCode = {
  USER_NOT_FOUND: new AppError(
    AppMessages.USER_NOT_FOUND,
    AppErrorCode.USER_NOT_FOUND,
    AppErrorType.CLIENT_ERROR,
    AppErrorAction.DEFAULT,
  ),
  USER_EMAIL_ALREADY_EXISTS: new AppError(
    AppMessages.EMAIL_ALREADY_EXISTS,
    AppErrorCode.USER_EMAIL_ALREADY_EXISTS,
    AppErrorType.CLIENT_ERROR,
    AppErrorAction.DEFAULT,
  ),
  USER_UNAUTHORIZED: new AppError(
    AppMessages.UNAUTHORIZED,
    AppErrorCode.USER_UNAUTHORIZED,
    AppErrorType.CLIENT_ERROR,
    AppErrorAction.DEFAULT,
  ),
  USER_FORBIDDEN: new AppError(
    AppMessages.FORBIDDEN,
    AppErrorCode.USER_FORBIDDEN,
    AppErrorType.CLIENT_ERROR,
    AppErrorAction.DEFAULT,
  ),
  USER_PASSWORD_NOT_MATCH: new AppError(
    AppMessages.FORBIDDEN,
    AppErrorCode.USER_PASSWORD_NOT_MATCH,
    AppErrorType.CLIENT_ERROR,
    AppErrorAction.DEFAULT,
  ),
  CONFIGURATION_ERROR: new AppError(
    AppMessages.CONFIGURATION_ERROR,
    AppErrorCode.CONFIGURATION_ERROR,
    AppErrorType.CLIENT_ERROR,
    AppErrorAction.DEFAULT,
  ),
};
