import { validate, validateSync, ValidationError } from "class-validator";

export type ClassValidationErrors = {
  property: string;
  message: string[];
};

export type ClassValidationDetails = {
  context: string;
  errors: ClassValidationErrors[];
};

export class ClassValidator {
  public static async validate<TTarget extends object>(
    target: TTarget,
    context?: string,
  ): Promise<ClassValidationDetails | null> {
    let details: ClassValidationDetails | null = null;
    const errors: ValidationError[] = await validate(target);

    if (errors.length > 0) {
      details = { context: context || target.constructor.name, errors: [] };

      for (const error of errors) {
        details.errors.push({
          property: error.property,
          message: error.constraints ? Object.values(error.constraints) : [],
        });
      }
    }
    return details;
  }

  public static validateSync<TTarget extends object>(
    target: TTarget,
    context?: string,
  ): ClassValidationDetails | null {
    let details: ClassValidationDetails | null = null;
    const errors: ValidationError[] = validateSync(target);

    if (errors.length > 0) {
      details = { context: context || target.constructor.name, errors: [] };
      for (const error of errors) {
        details.errors.push({
          property: error.property,
          message: error.constraints ? Object.values(error.constraints) : [],
        });
      }
    }
    return details;
  }
}
