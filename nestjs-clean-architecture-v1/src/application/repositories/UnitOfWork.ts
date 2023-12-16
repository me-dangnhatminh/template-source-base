import { UserRepository } from "./UserRepository";

export abstract class UnitOfWork {
  abstract get userRepository(): UserRepository;
  abstract runInTransaction<R>(
    fn: (context?: unknown) => Promise<R>,
  ): Promise<R>;
}
