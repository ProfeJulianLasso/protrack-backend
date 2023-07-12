import { DomainException } from '../../exceptions';
import {
  NameValueObject,
  StateValueObject,
  findRoleHelper,
  findUserHelper,
} from '../common';
import { IPermission } from '../interfaces';
import { RoleEntity } from '../role';
import { UserEntity } from '../user';
import { PermissionIdValueObject } from './value-objects';

export class PermissionEntity implements IPermission {
  permissionId: PermissionIdValueObject;
  name: NameValueObject;
  state: StateValueObject;
  roles?: RoleEntity[];
  users?: UserEntity[];

  constructor(permission: Partial<IPermission>) {
    if (permission.permissionId) this.permissionId = permission.permissionId;
    if (permission.name) this.name = permission.name;
    if (permission.state) this.state = permission.state;
    if (permission.roles) this.roles = permission.roles as RoleEntity[];
    if (permission.users) this.users = permission.users as UserEntity[];
  }

  create(): this {
    this.state = new StateValueObject(true);
    return this;
  }

  updateName(name: NameValueObject): this {
    this.name = name;
    return this;
  }

  disable(): this {
    this.state = new StateValueObject(false);
    return this;
  }

  enable(): this {
    return this.create();
  }

  addRole(role: RoleEntity): this {
    if (!this.roles) this.roles = [];
    const roleExists = findRoleHelper(role, this.roles);
    if (roleExists > -1) throw new DomainException('Role already assigned.');
    this.roles.push(role);
    return this;
  }

  removeRole(role: RoleEntity): this {
    if (!this.roles) this.roles = [];
    const roleExists = findRoleHelper(role, this.roles);
    if (roleExists === -1) throw new DomainException('Role not assigned.');
    this.roles.splice(roleExists, 1);
    return this;
  }

  addUser(user: UserEntity): this {
    if (!this.users) this.users = [];
    const userFound = findUserHelper(user, this.users);
    if (userFound > -1) throw new DomainException('User already assigned.');
    this.users.push(user);
    return this;
  }

  removeUser(user: UserEntity): this {
    if (!this.users) this.users = [];
    const userFound = findUserHelper(user, this.users);
    if (userFound === -1) throw new DomainException('User not assigned.');
    this.users.splice(userFound, 1);
    return this;
  }
}
