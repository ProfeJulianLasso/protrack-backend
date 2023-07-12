import { RoleEntity, UserEntity } from '../../entities';
import { AddRoleToUserHelper, RegisterUserHelper } from './helpers';

export class SecurityAggregate {
  registerUser(user: UserEntity): UserEntity {
    return RegisterUserHelper(user);
  }

  addRoleToUser(user: UserEntity, role: RoleEntity): UserEntity {
    return AddRoleToUserHelper(user, role);
  }
}
