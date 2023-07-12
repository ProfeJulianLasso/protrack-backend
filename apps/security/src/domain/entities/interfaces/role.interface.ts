import { NameValueObject, StateValueObject } from '../common';
import { RoleIdValueObject } from '../role';
import { IPermission } from './permission.interface';
import { IUser } from './user.interface';

export interface IRole {
  roleId: RoleIdValueObject;
  name: NameValueObject;
  state: StateValueObject;
  users: IUser[];
  permissions: IPermission[];
}
