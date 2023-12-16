import { AppErrorAction } from "./contants/AppErrorAction";
import { AppErrorType } from "./contants/AppErrorType";

export class AppError extends Error {
  public readonly errorCode: string;
  public readonly errorType: AppErrorType;
  public readonly errorAction: AppErrorAction;

  constructor(
    message?: string,
    errorCode?: string,
    errorType?: AppErrorType,
    errorAction?: AppErrorAction,
  ) {
    super(message);
    this.errorCode = errorCode ?? "";
    this.errorType = errorType ?? AppErrorType.INTERNAL_ERROR;
    this.errorAction = errorAction ?? AppErrorAction.DEFAULT;
  }
}
