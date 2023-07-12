import { NameValueObject, StateValueObject } from '../common';
import { PermissionIdValueObject } from '../permission';
import { IRole } from './role.interface';
import { IUser } from './user.interface';

export interface IPermission {
  permissionId: PermissionIdValueObject;
  name: NameValueObject;
  state: StateValueObject;
  roles?: IRole[];
  users?: IUser[];
}
