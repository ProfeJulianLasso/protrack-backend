import { DomainException } from '../../exceptions';
import { NameValueObject, StateValueObject, findUserHelper } from '../common';
import { findPermissionHelper } from '../common/helpers/find-permission/find-permission.helper';
import { IRole } from '../interfaces';
import { PermissionEntity } from '../permission';
import { UserEntity } from '../user';
import { RoleIdValueObject } from './value-objects';

export class RoleEntity implements IRole {
  roleId: RoleIdValueObject;
  name: NameValueObject;
  state: StateValueObject;
  users: UserEntity[];
  permissions: PermissionEntity[];

  constructor(role: Partial<IRole>) {
    if (role.roleId) this.roleId = role.roleId;
    if (role.name) this.name = role.name;
    if (role.state) this.state = role.state;
    if (role.users) this.users = role.users as UserEntity[];
    if (role.permissions)
      this.permissions = role.permissions as PermissionEntity[];
  }

  create(): this {
    this.state = new StateValueObject(true);
    return this;
  }

  updateName(name: NameValueObject): this {
    this.name = name;
    return this;
  }

  enable(): this {
    return this.create();
  }

  disable(): this {
    this.state = new StateValueObject(false);
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

  addPermission(permission: PermissionEntity): this {
    if (!this.permissions) this.permissions = [];
    const permissionFound = findPermissionHelper(permission, this.permissions);
    if (permissionFound > -1)
      throw new DomainException('Permission already assigned.');
    this.permissions.push(permission);
    return this;
  }

  removePermission(permission: PermissionEntity): this {
    if (!this.permissions) this.permissions = [];
    const permissionFound = findPermissionHelper(permission, this.permissions);
    if (permissionFound === -1)
      throw new DomainException('Permission not assigned.');
    this.permissions.splice(permissionFound, 1);
    return this;
  }
}
