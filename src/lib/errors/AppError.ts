export type AppErrorCode =
  | "CONTENT_FETCH_FAILED"
  | "INVALID_CONTENT_SHAPE"
  | "UNKNOWN";

export class AppError extends Error {
  public readonly code: AppErrorCode;
  public readonly cause?: unknown;

  constructor(
    message: string,
    code: AppErrorCode = "UNKNOWN",
    cause?: unknown,
  ) {
    super(message);
    this.name = "AppError";
    this.code = code;
    this.cause = cause;
  }
}
