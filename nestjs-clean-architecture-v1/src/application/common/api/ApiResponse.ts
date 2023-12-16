import { AppError } from "core/common/AppError";
import { AppException } from "../AppExeption";

export class ApiResponseMetadata {
  public readonly status: number;
  public readonly success: boolean;
  public readonly message?: string;
  public readonly error?: AppError;

  constructor(
    status: number,
    messageOrError: string | AppError,
    success?: boolean,
  ) {
    this.status = status;
    if (typeof messageOrError === "string") {
      this.message = messageOrError;
      this.success = success ?? true;
    } else if (messageOrError instanceof AppError) {
      this.error = messageOrError;
      this.success = false;
    } else this.success = true;
  }
}

export type TApiResponse<T> = {
  metadata: ApiResponseMetadata;
  data?: T;
};

export class ApiResponse<T = undefined> implements TApiResponse<T> {
  readonly metadata: ApiResponseMetadata;
  readonly data?: T;

  private constructor(
    status: number,
    messageOrError: string | AppError,
    data?: T,
    success?: boolean,
  ) {
    this.metadata = new ApiResponseMetadata(status, messageOrError, success);
    if (data) this.data = data;
  }

  getErrorDisplay(): string {
    if (this.metadata.message) return this.metadata.message;
    else if (this.metadata.error) {
      const error = this.metadata.error;
      return `${error.errorCode}:${error.message}`;
    } else return "";
  }

  public static success<T>(data?: T, status?: number) {
    return new ApiResponse(status ?? 200, "Success", data, true);
  }

  public static appError<T>(appError: AppException, data?: T): ApiResponse<T> {
    return new ApiResponse(500, appError, data, false); //TODO fix
  }

  public static error<T>(
    status?: number,
    messageOrError?: string | AppError,
    data?: T,
  ) {
    return new ApiResponse(
      status ?? 500,
      messageOrError ?? "Intenal Server Error",
      data,
      false,
    );
  }
}
