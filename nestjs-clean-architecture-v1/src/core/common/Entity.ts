import { IsDate, IsOptional } from "class-validator";
import { ClassValidator } from "./ClassValidator";

export abstract class Entity<T extends string | number> {
  protected _id: T;
  @IsDate() protected _createdAt: Date;
  @IsOptional() @IsDate() protected _updatedAt: Date | null;
  @IsOptional() @IsDate() protected _removedAt: Date | null;

  // Getter
  get id() {
    return this._id;
  }

  get createdAt() {
    return this._createdAt;
  }

  get updatedAt() {
    return this._updatedAt;
  }

  get removedAt() {
    return this._removedAt;
  }

  protected constructor(
    id: T,
    createdAt: Date,
    updatedAt: Date | null,
    removedAt: Date | null,
  ) {
    this._id = id;
    this._createdAt = createdAt;
    this._updatedAt = updatedAt;
    this._removedAt = removedAt;
  }

  validateSync(): void {
    const details = ClassValidator.validateSync(this);
    if (details != null)
      throw new Error(`Validate Entity Failed: ${details.errors.join(", ")}`);
  }

  async validate(): Promise<void> {
    return this.validateSync();
  }
}
