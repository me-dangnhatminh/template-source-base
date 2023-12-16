import { Entity } from "./Entity";

export abstract class CrudService<TEntity extends Entity<any>> {
  abstract create(entity: TEntity): Promise<TEntity>;
  abstract getById(id: TEntity["id"]): Promise<TEntity>;
  abstract getByIds(ids?: TEntity["id"]): Promise<TEntity[]>;
  abstract update(entity: TEntity): void;
  abstract updates(entites: TEntity[]): void;
  abstract deleteById(id: TEntity["id"]): void;
  abstract deleteByIds(ids?: TEntity["id"][]): void;
}
