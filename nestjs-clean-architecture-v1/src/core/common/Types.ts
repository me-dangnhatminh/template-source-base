import { Entity } from "./Entity";

export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;

export type TypeIdentifier<T extends Entity<any>> = T["id"];
export type ExcludeCommonEntityFields<T, K extends keyof any = never> = Omit<
  T,
  "id" | "createdAt" | "updatedAt" | "removedAt" | K
>;
