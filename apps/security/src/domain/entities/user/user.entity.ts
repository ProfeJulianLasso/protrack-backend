import { DomainException } from '../../exceptions';
import { StateValueObject, findRoleHelper } from '../common';
import { findPermissionHelper } from '../common/helpers/find-permission/find-permission.helper';
import { IUser } from '../interfaces';
import { PermissionEntity } from '../permission';
import { RoleEntity } from '../role';
import { UserIdValueObject } from './value-objects';

export class UserEntity implements IUser {
  userId: UserIdValueObject;
  state: StateValueObject;
  roles?: RoleEntity[];
  permissions?: PermissionEntity[];

  constructor(user: Partial<IUser>) {
    if (user.userId) this.userId = user.userId;
    if (user.state) this.state = user.state;
    if (user.roles) this.roles = user.roles as RoleEntity[];
    if (user.permissions)
      this.permissions = user.permissions as PermissionEntity[];
  }

  create(): this {
    this.state = new StateValueObject(true);
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
    const roleFound = findRoleHelper(role, this.roles);
    if (roleFound > 0) throw new DomainException('Role already assigned.');
    this.roles.push(role);
    return this;
  }

  removeRole(role: RoleEntity): this {
    if (!this.roles) this.roles = [];
    const roleFound = findRoleHelper(role, this.roles);
    if (roleFound === -1) throw new DomainException('Role not assigned.');
    this.roles.splice(roleFound, 1);
    return this;
  }

  addPermission(permission: PermissionEntity): this {
    if (!this.permissions) this.permissions = [];
    const permissionFound = findPermissionHelper(permission, this.permissions);
    if (permissionFound > 0)
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
