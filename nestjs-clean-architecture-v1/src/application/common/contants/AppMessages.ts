export class AppMessages {
  // General messages
  static readonly SUCCESS = "Success.";
  static readonly FAILURE = "Failure.";
  static readonly NOT_FOUND = "Not found.";
  static readonly ALREADY_EXISTS = "Already exists.";
  static readonly INTERNAL_SERVER_ERROR = "Internal server error.";
  static readonly BAD_REQUEST = "Bad request.";
  static readonly UNAUTHORIZED = "Unauthorized.";
  static readonly FORBIDDEN = "Forbidden.";
  static readonly NOT_IMPLEMENTED = "Not implemented.";
  static readonly SERVICE_UNAVAILABLE = "Service unavailable.";
  static readonly GATEWAY_TIMEOUT = "Gateway timeout.";
  static readonly NETWORK_CONNECT_TIMEOUT_ERROR =
    "Network connect timeout error.";
  static readonly NETWORK_READ_TIMEOUT_ERROR = "Network read timeout error.";
  static readonly NETWORK_ERROR = "Network error.";
  static readonly UNKNOWN_ERROR = "Unknown error.";
  static readonly CONFIGURATION_ERROR = "Configuration error {0}.";

  // User related messages
  static readonly USER_CREATED_SUCCESSFULLY = "User created successfully.";
  static readonly USER_UPDATED_SUCCESSFULLY = "User updated successfully.";
  static readonly USER_DELETED_SUCCESSFULLY = "User deleted successfully.";
  static readonly USER_NOT_FOUND = "User not found.";
  static readonly INVALID_CREDENTIALS = "Invalid credentials.";
  static readonly EMAIL_ALREADY_EXISTS = "Email already exists.";
  static readonly USERNAME_ALREADY_EXISTS = "Username already exists.";
  static readonly PASSWORD_RESET_LINK_SENT = "Password reset link sent.";
  static readonly PASSWORD_RESET_SUCCESSFUL = "Password reset successful.";
  static readonly PASSWORD_CHANGE_SUCCESSFUL = "Password change successful.";

  // File related messages
  static readonly FILE_NOT_FOUND = "File not found.";
  static readonly INVALID_FILE_FORMAT = "Invalid file format.";
  static readonly INVALID_FILE_SIZE = "Invalid file size.";
  static readonly FILE_UPLOAD_SUCCESSFUL = "File upload successful.";
  static readonly FILE_UPLOAD_FAILED = "File upload failed.";
  static readonly FILE_DELETE_SUCCESSFUL = "File delete successful.";
  static readonly FILE_DELETE_FAILED = "File delete failed.";

  // Authentication related messages
  static readonly AUTHENTICATION_FAILED = "Authentication failed.";
  static readonly AUTHORIZATION_FAILED = "Authorization failed.";
  static readonly ACCESS_DENIED = "Access denied.";
  static readonly INVALID_TOKEN = "Invalid token.";
  static readonly EXPIRED_TOKEN = "Expired token.";
  static readonly TOKEN_NOT_FOUND = "Token not found.";
  static readonly TOKEN_REVOKED = "Token revoked.";
  static readonly TOKEN_REFRESH_SUCCESSFUL = "Token refresh successful.";
  static readonly TOKEN_REFRESH_FAILED = "Token refresh failed.";

  // Database related messages
  static readonly DATABASE_CONNECTION_SUCCESSFUL =
    "Database connection successful.";
  static readonly DATABASE_CONNECTION_FAILED = "Database connection failed.";
  static readonly DATABASE_QUERY_SUCCESSFUL = "Database query successful.";
  static readonly DATABASE_QUERY_FAILED = "Database query failed.";
  static readonly DATABASE_INSERT_SUCCESSFUL = "Database insert successful.";
  static readonly DATABASE_INSERT_FAILED = "Database insert failed.";
  static readonly DATABASE_UPDATE_SUCCESSFUL = "Database update successful.";
  static readonly DATABASE_UPDATE_FAILED = "Database update failed.";
  static readonly DATABASE_DELETE_SUCCESSFUL = "Database delete successful.";
  static readonly DATABASE_DELETE_FAILED = "Database delete failed.";

  // Validation related messages
  static readonly VALIDATION_FAILED = "Validation failed.";
  static readonly REQUIRED_FIELD = "This field is required.";
  static readonly INVALID_FIELD = "Invalid field.";
  static readonly FIELD_MIN_LENGTH =
    "Field must be at least {0} characters long.";
  static readonly FIELD_MAX_LENGTH = "Field must not exceed {0} characters.";
  static readonly FIELD_MIN = "Field must be greater than or equal to {0}.";
  static readonly FIELD_MAX = "Field must be less than or equal to {0}.";
  static readonly FIELD_PATTERN = "Field must match the pattern {0}.";
  static readonly FIELD_ENUM =
    "Field must be one of the following values: {0}.";
  static readonly FIELD_ARRAY_MIN_LENGTH =
    "Field must have at least {0} items.";
  static readonly FIELD_ARRAY_MAX_LENGTH = "Field must not exceed {0} items.";
  static readonly FIELD_ARRAY_UNIQUE = "Field must have unique items.";
  static readonly FIELD_ARRAY_TYPE = "Field must be an array of {0}.";
  static readonly FIELD_ARRAY_ITEMS_TYPE =
    "Field must be an array of items of type {0}.";
  static readonly FIELD_OBJECT_MIN_PROPERTIES =
    "Field must have at least {0} properties.";
  static readonly FIELD_OBJECT_MAX_PROPERTIES =
    "Field must not exceed {0} properties.";
  static readonly FIELD_OBJECT_INVALID_PROPERTY = "Invalid property {0}.";
  static readonly FIELD_OBJECT_REQUIRED_PROPERTY = "Property {0} is required.";
  static readonly FIELD_OBJECT_PROPERTY_TYPE =
    "Property {0} must be of type {1}.";
  static readonly FIELD_OBJECT_PROPERTY_MIN_LENGTH =
    "Property {0} must be at least {1} characters long.";
  static readonly FIELD_OBJECT_PROPERTY_MAX_LENGTH =
    "Property {0} must not exceed {1} characters.";
  static readonly FIELD_OBJECT_PROPERTY_MIN =
    "Property {0} must be greater than or equal to {1}.";
  static readonly FIELD_OBJECT_PROPERTY_MAX =
    "Property {0} must be less than or equal to {1}.";
  static readonly FIELD_OBJECT_PROPERTY_PATTERN =
    "Property {0} must match the pattern {1}.";
  static readonly FIELD_OBJECT_PROPERTY_ENUM =
    "Property {0} must be one of the following values: {1}.";
  static readonly FIELD_OBJECT_PROPERTY_ARRAY_MIN_LENGTH =
    "Property {0} must have at least {1} items.";
  static readonly FIELD_OBJECT_PROPERTY_ARRAY_MAX_LENGTH =
    "Property {0} must not exceed {1} items.";
  static readonly FIELD_OBJECT_PROPERTY_ARRAY_UNIQUE =
    "Property {0} must have unique items.";
  static readonly FIELD_OBJECT_PROPERTY_ARRAY_TYPE =
    "Property {0} must be an array of {1}.";
  static readonly FIELD_OBJECT_PROPERTY_ARRAY_ITEMS_TYPE =
    "Property {0} must be an array of items of type {1}.";
}
