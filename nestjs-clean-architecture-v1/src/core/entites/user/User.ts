import { Entity } from "../../common";
import { CreateUserPayload, EditUserPayload } from "./UserType";
import { AuthProviderName, UserRole, UserStatus } from "../../common/contants";

// Dependencies for libraries
import { IsEmail, IsEnum, IsString, IsUUID } from "class-validator";
import { compareSync, genSaltSync, hashSync } from "bcryptjs";
import { v4 as uuid } from "uuid";

export class User extends Entity<string> {
  @IsUUID() protected _id: string;
  @IsString() private _firstName: string;
  @IsString() private _lastName: string;
  @IsEmail() private _email: string;
  @IsString() private _password: string; // password is hashed
  @IsEnum(UserRole) private _role: UserRole;
  @IsEnum(UserStatus) private _status: UserStatus;
  @IsString() private _avatarUrl: string;
  @IsEnum(AuthProviderName) private _authProviderName: AuthProviderName;

  //getter
  get firstName(): string {
    return this._firstName;
  }
  get lastName(): string {
    return this._lastName;
  }
  get email(): string {
    return this._email;
  }
  get password(): string {
    return this._password;
  }
  get role(): UserRole {
    return this._role;
  }
  get status(): UserStatus {
    return this._status;
  }
  get avatarUrl(): string {
    return this._avatarUrl;
  }
  get authProviderName(): AuthProviderName {
    return this._authProviderName;
  }

  constructor(
    id: string,
    createdAt: Date,
    updatedAt: Date | null,
    removedAt: Date | null,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    role: UserRole,
    status: UserStatus,
    avatarUrl: string,
    authProviderName: AuthProviderName,
  ) {
    super(id, createdAt, updatedAt, removedAt);
    this._id = id;
    this._firstName = firstName;
    this._lastName = lastName;
    this._email = email;
    this._password = password;
    this._role = role;
    this._status = status;
    this._avatarUrl = avatarUrl;
    this._authProviderName = authProviderName;
  }

  public static createSync(payload: CreateUserPayload) {
    const user = new User(
      payload.id ?? uuid(),
      payload.createdAt ?? new Date(),
      payload.updatedAt ?? null,
      payload.removedAt ?? null,
      payload.firstName ?? "",
      payload.lastName ?? "",
      payload.email ?? "",
      User.hashPassword(payload.password ?? Math.random().toString(36)),
      payload.role ?? UserRole.USER,
      payload.status ?? UserStatus.INACTIVE,
      payload.avatarUrl ?? "",
      payload.authProviderName ?? AuthProviderName.LOCAL,
    );
    user.validateSync();
    return user;
  }

  public static async create(payload: CreateUserPayload) {
    const user = this.createSync(payload);
    return user;
  }

  public editSync(payload: EditUserPayload) {
    payload.firstName && (this._firstName = payload.firstName);
    payload.lastName && (this._lastName = payload.lastName);
    payload.password && (this._password = User.hashPassword(payload.password));
    payload.role && (this._role = payload.role);
    payload.status && (this._status = payload.status);
    payload.avatarUrl && (this._avatarUrl = payload.avatarUrl);
    payload.authProviderName &&
      (this._authProviderName = payload.authProviderName);

    if (
      payload.firstName !== undefined ||
      payload.lastName !== undefined ||
      payload.password !== undefined ||
      payload.role !== undefined ||
      payload.status !== undefined ||
      payload.avatarUrl !== undefined ||
      payload.authProviderName !== undefined
    )
      this._updatedAt = new Date();
    this.validateSync();
  }

  public async edit(payload: EditUserPayload) {
    this.editSync(payload);
  }

  private static hashPassword(password) {
    const salt: string = genSaltSync();
    return hashSync(password, salt);
  }

  public comparePassword(password: string) {
    return compareSync(password, this._password);
  }
}
