import { User } from "core/entites/user";
import { BaseRepository } from "../common/BaseRepository";

export abstract class UserRepository extends BaseRepository<User> {
  abstract findUserByEmail(email: string): Promise<User | null>;
}
