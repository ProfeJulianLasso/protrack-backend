import { StateValueObject } from '../common';
import { UserIdValueObject } from '../user';
import { IPermission } from './permission.interface';
import { IRole } from './role.interface';

export interface IUser {
  userId: UserIdValueObject;
  state: StateValueObject;
  roles?: IRole[];
  permissions?: IPermission[];
}
