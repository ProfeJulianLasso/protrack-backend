// import { RoleEntity, UserEntity } from '@security/domain';

import { RoleEntity, UserEntity } from 'apps/security/src/domain/entities';

export const AddRoleToUserHelper = (
  user: UserEntity,
  role: RoleEntity,
): UserEntity => {
  return user.addRole(role);
};
