type LogLevel = "info" | "warn" | "error";

interface Logger {
  info: (message: string, meta?: Record<string, unknown>) => void;
  warn: (message: string, meta?: Record<string, unknown>) => void;
  error: (message: string, meta?: Record<string, unknown>) => void;
}

function write(
  level: LogLevel,
  message: string,
  meta?: Record<string, unknown>,
) {
  // İleride Sentry/Logtail gibi bir servise burada yönlendirme yapılacak.
  const payload = {
    level,
    message,
    ...meta,
    timestamp: new Date().toISOString(),
  };
  if (level === "error") {
    console.error(payload);
  } else if (level === "warn") {
    console.warn(payload);
  } else {
    console.info(payload);
  }
}

export const logger: Logger = {
  info: (message, meta) => write("info", message, meta),
  warn: (message, meta) => write("warn", message, meta),
  error: (message, meta) => write("error", message, meta),
};
