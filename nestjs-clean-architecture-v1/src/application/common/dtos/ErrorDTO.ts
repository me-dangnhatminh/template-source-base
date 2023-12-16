export class ErrorDTO {
  public readonly message: string;
  public readonly code: string;
  public readonly action: string;
  public readonly title: string;
  public readonly errorType: string;

  constructor(
    code: string,
    message: string,
    action: string,
    title: string,
    errorType: string,
  ) {
    this.code = code;
    this.message = message;
    this.action = action;
    this.title = title;
    this.errorType = errorType;
  }
}
