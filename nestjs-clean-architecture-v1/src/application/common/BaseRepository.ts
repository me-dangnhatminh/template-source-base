import { Entity } from "core/common";

export abstract class BaseRepository<T extends Entity<any>> {
  abstract add(entity: T): Promise<T>;
  abstract findById(id: T["id"]): Promise<T | null>;
  abstract findByIds(ids?: T["id"][]): Promise<T[]>;
  abstract update(entity: T): Promise<void>;
  abstract delete(entity: T): Promise<void>;
}
