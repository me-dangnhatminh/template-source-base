import { instanceToPlain } from "class-transformer";
import { validateSync } from "class-validator";
import { AppException } from "./AppExeption";
import { AppErrors } from "./contants/AppErrors";

export class ConfigWrapper {
  protected validate() {
    const errors = validateSync(this);
    if (errors.length > 0)
      throw new AppException(AppErrors.CONFIGURATION_ERROR, errors.join(", "));
  }

  static getConfigs(...args: (new () => ConfigWrapper)[]) {
    const configsPlain = args.map((config) => {
      return () => {
        const instance = new config();
        instance.validate();
        const plain = instanceToPlain(instance);
        return plain;
      };
    });
    return configsPlain;
  }
}
