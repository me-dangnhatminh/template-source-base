import { AppError } from "core/common/AppError";
import { TextUtils } from "core/common/utils";

export class AppException extends AppError {
  constructor(error: AppError, ...args: any[]) {
    super(
      TextUtils.messageFormat(error.message, ...args),
      error.errorCode,
      error.errorType,
      error.errorAction,
    );
  }
}
